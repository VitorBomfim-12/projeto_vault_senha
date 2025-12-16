import os
from flask import Flask
from src.extensions import mail
from dotenv import load_dotenv
from config import Config
load_dotenv()

app = Flask(__name__,template_folder=os.path.join('src/view','templates'),
            static_folder=os.path.join('src/view','static'))

#configuração do app via configuração por objeto
app.config.from_object(Config)

#inicialização da extensão do flask mail
mail.init_app(app)
#rotas
from src.controller.logincontroler import LoginManager
app.add_url_rule('/','index',LoginManager.index, methods = ["GET","POST"])



