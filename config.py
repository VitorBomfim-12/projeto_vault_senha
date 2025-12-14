import os,dotenv
from dotenv import load_dotenv
from src.controller.logincontroler import LoginManager
from app import app


class Config:

    SECRET_KEY = os.getenv('SECRET_KEY')
    app.config["SESSION_PERMANENT"] = False
    app.config["SESSION_TYPE"] = "filesystem"   
    app.config["SESSION_USE_SIGNER"] = True 

    #rotasa
    app.add_url_rule('/','index',LoginManager.index, methods = ["GET","POST"])

    #configuração flask mail
    app.config['MAIL_SERVER']='smtp.gmail.com'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USERNAME'] = os.getenv('DEL_EMAIL')
    app.config['MAIL_PASSWORD'] = os.getenv('APP_KEY')
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USE_SSL'] = False 
    
