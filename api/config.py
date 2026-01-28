import os, redis
from dotenv import load_dotenv
from datetime import timedelta

class Config:
    load_dotenv()            
    #definição da secret key do app
    SECRET_KEY = os.getenv('SECRET_KEY')
    #configuração dos parâmetros das sessions
    SESSION_PERMANENT = False
    SESSION_TYPE = "redis"   
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.from_url('redis://127.0.0.1:6379')
    SESSION_COOKIES_SECURE = True
    SESSION_COOKIE_HTTPONLY = True
    PERMANENT_SESSION_LIFETIME = timedelta(minutes=10)

    #configuração flask mail
    MAIL_SERVER='smtp.gmail.com'
    MAIL_PORT = 587
    MAIL_USERNAME = os.getenv('DEL_MAIL')
    MAIL_PASSWORD = os.getenv('APP_KEY')
    MAIL_USE_TLS = True
    MAIL_USE_SSL = False 
