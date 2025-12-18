import os
from flask import Flask
from src.extensions import mail
from dotenv import load_dotenv
from config import Config
load_dotenv()

app = Flask(__name__,template_folder=os.path.join('src/view','templates'),
            static_folder=os.path.join('src/view','static'))

app.config.from_object(Config)
mail.init_app(app)

#rotas
from src.controller.logincontroler import LoginManager
from src.controller.mfacontroller import MfaVerify
from src.controller.usercontroler import UserManager
from src.controller.aboutcontroller import ControlPage

app.add_url_rule('/','index',LoginManager.index, methods = ["GET","POST"])
app.add_url_rule('/verify','mfa',MfaVerify.mfa,methods=["GET","POST"])
app.add_url_rule('/user','userpage',UserManager.userpage,methods=["GET","POST"])
app.add_url_rule('/about-us','about',ControlPage.about, methods=['GET'])


if __name__ == "__main__":
    app.run(debug=True)