from typing import Dict
from models.user import UserCreate

# This is a simple in-memory database for demonstration
# In production, use a real database like PostgreSQL
class Database:
    def __init__(self):
        self.users: Dict[str, dict] = {}
        self.counter = 0

    def create_user(self, user: UserCreate, hashed_password: str):
        self.counter += 1
        user_dict = {
            "id": self.counter,
            "email": user.email,
            "hashed_password": hashed_password,
            "is_active": True
        }
        self.users[user.email] = user_dict
        return user_dict

    def get_user(self, email: str):
        return self.users.get(email)

# Create a database instance
db = Database()
