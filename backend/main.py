from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datetime import timedelta
import pickle
import pandas as pd
from typing import Annotated
from pydantic import BaseModel
from models.user import UserCreate, Token, User
from models.database_models import Base
from database.database import engine, get_db
from crud import user as user_crud
from auth.utils import (
    verify_password, 
    create_access_token, 
    ACCESS_TOKEN_EXPIRE_MINUTES,
    verify_token
)

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Load the model
try:
    with open('model/linear_regression_model.h5', 'rb') as f:
        model = pickle.load(f)
except FileNotFoundError:
    raise Exception("Model file not found. Please ensure the model is saved in the correct location.")

class HousePredictionInput(BaseModel):
    rooms: float
    distance: float
    bathroom: float
    car: float
    landsize: float
    building_area: float
    propertycount: float
    age: float
    suburb_encoded: int

class HousePredictionOutput(BaseModel):
    predicted_price: float

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@app.post("/register", response_model=User)
async def register(user: UserCreate, db: Session = Depends(get_db)):
    db_user = user_crud.get_user(db, user.email)
    if db_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )
    return user_crud.create_user(db, user)

@app.post("/token", response_model=Token)
async def login(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
    db: Session = Depends(get_db)
):
    user = user_crud.get_user(db, form_data.username)
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=401,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/predict", response_model=HousePredictionOutput)
async def predict_price(
    input_data: HousePredictionInput,
    token: Annotated[str, Depends(oauth2_scheme)],
    db: Session = Depends(get_db)
):
    # Verify token first
    token_data = await verify_token(token)
    
    # Verify user exists in database
    user = user_crud.get_user(db, token_data.email)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found"
        )

    try:
        # Convert input data to pandas DataFrame with correct column names
        features = pd.DataFrame([[
            input_data.rooms,
            input_data.distance,
            input_data.bathroom,
            input_data.car,
            input_data.landsize,
            input_data.building_area,
            input_data.propertycount,
            input_data.age,
            input_data.suburb_encoded
        ]], columns=['Rooms', 'Distance', 'Bathroom', 'Car', 'Landsize', 
                    'BuildingArea', 'Propertycount', 'Age', 'Suburb_Encoded'])
        
        prediction = model.predict(features)[0]
        
        formatted_prediction = round(float(prediction), 2)
        
        return {"predicted_price": formatted_prediction}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
