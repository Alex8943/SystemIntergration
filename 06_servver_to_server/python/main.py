from fastapi import FastAPI
from datetime import datetime
import requests

app = FastAPI()

@app.get("/date")
def get_data(): 
    return datetime.now()

@app.get("/datefromexpress")
def get_data_from_express(): 
    response = requests.get("http://localhost:8080/date")
    return response.json()

@app.get("/ngrokdata")
def get_data_from_express(): 
    response = requests.get("https://4814-195-249-146-101.eu.ngrok.io/date")
    return response.json()