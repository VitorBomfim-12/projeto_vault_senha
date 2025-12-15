import os
from flask import Flask
from flask_mail import Mail
from src.extensions import mail
from dotenv import load_dotenv
from src.service.email_sender import MailManager

load_dotenv()
app = Flask(__name__,template_folder=os.path.join('src/view','templates'),
            static_folder=os.path.join('src/view','static'))



    
SECRET_KEY = os.getenv('SECRET_KEY')
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"   
app.config["SESSION_USE_SIGNER"] = True 



#configuração flask mail
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = os.getenv('DEL_MAIL')
app.config['MAIL_PASSWORD'] = os.getenv('APP_KEY')
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False 

mail.init_app(app)
#rotas
from src.controller.logincontroler import LoginManager
app.add_url_rule('/','index',LoginManager.index, methods = ["GET","POST"])



