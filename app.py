import os
from flask import Flask
from config import Config
from src.controller.usercontroler import MyFlaskApp
from src.controller.logincontroler import LoginManager
from flask_mail import Mail



app = Flask(__name__,template_folder=os.path.join('src/view','templates'),
            static_folder=os.path.join('src/view','static'))

from config import Config
app.config.from_object(Config)

mail = Mail(app)
if __name__ == '__main__':
    app.run(debug=True)

