import os,dotenv
from dotenv import load_dotenv
from src.controller.usercontroler import MyFlaskApp

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY')
    

