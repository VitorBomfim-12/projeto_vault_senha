import os,dotenv
from dotenv import load_dotenv
from flask_mail import Mail

load_dotenv()
class Config:
        
    SECRET_KEY = os.getenv('SECRET_KEY')
    SESSION_PERMANENT = False
    SESSION_TYPE = "filesystem"   
    SESSION_USE_SIGNER = True 



    #configuração flask mail
    MAIL_SERVER='smtp.gmail.com'
    MAIL_PORT= 587
    MAIL_USERNAME = os.getenv('DEL_MAIL')
    MAIL_PASSWORD = os.getenv('APP_KEY')
    MAIL_USE_TLS = True
    MAIL_USE_SSL = False 