import os
from flask import Flask
from config import Config
from controller.usercontroler import MyFlaskApp

app = Flask(__name__,template_folder=os.path.join('view','templates'))
app.add_url_rule('/','index.html',MyFlaskApp.index)
app.config.from_object(Config)

