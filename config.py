import os,dotenv
from dotenv import load_dotenv
from app import app

class Config:
    dotenv.load_dotenv()
    SECRET_KEY = os.getenv('SECRET_KEY')
    app.config["SESSION_PERMANENT"] = False
    app.config["SESSION_TYPE"] = "filesystem"
    app.config["SESSION_USE_SIGNER"] = True 


