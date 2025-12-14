import os
from flask import Flask
from src.controller.logincontroler import LoginManager


app = Flask(__name__,template_folder=os.path.join('src/view','templates'),
            static_folder=os.path.join('src/view','static'))

from config import Config
app.config.from_object(Config)

app.add_url_rule('/','index',LoginManager.index, methods = ["GET","POST"])


if __name__ == '__main__':
    app.run(debug=True)

