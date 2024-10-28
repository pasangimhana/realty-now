#!/bin/bash

if ! command -v python3 &> /dev/null; then
    echo "Python 3 is not installed. Please install Python 3 first."
    exit 1
fi

if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

echo "Activating virtual environment..."
source venv/bin/activate

python -m pip install --upgrade pip

echo "Installing requirements..."
pip install -r requirements.txt

echo "Starting FastAPI application..."
uvicorn main:app --reload --host 0.0.0.0 --port 8000
