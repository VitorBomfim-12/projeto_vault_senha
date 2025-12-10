import os
from flask import Flask
from config import Config
from src.controller.usercontroler import MyFlaskApp



app = Flask(__name__,template_folder=os.path.join('src/view','templates'))
app.config.from_object(Config)
app.add_url_rule('/','index',MyFlaskApp.index, methods = ["GET","POST"])


if __name__ == '__main__':
    app.run(debug=True)

