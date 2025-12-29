import os
from flask import Flask
from src.service.extensions.mail_ext import mail
from src.service.extensions.session import session
from dotenv import load_dotenv
from config import Config
load_dotenv()

app = Flask(__name__,template_folder=os.path.join('src/view','templates'),
            static_folder=os.path.join('src/view','static'))

app.config.from_object(Config)
mail.init_app(app)
session.init_app(app)

#rotas
from src.controller.logincontroler import LoginManager
from src.controller.mfacontroller import MfaVerify
from src.controller.usercontroler import UserManager
from src.controller.aboutcontroller import ControlPage
from src.service.logout import logout

app.add_url_rule('/','index',LoginManager.index, methods = ["GET","POST"])
app.add_url_rule('/verify','mfa',MfaVerify.mfa,methods=["GET","POST"])
app.add_url_rule('/user','userpage',UserManager.userpage,methods=["GET","POST"])
app.add_url_rule('/about-us','about',ControlPage.about, methods=['GET'])
app.add_url_rule('/update_senha','update_senha',UserManager.update_senha, methods=['POST'])
app.add_url_rule('/delete','deletar_senha',UserManager.deletar_senha,methods=['POST'])
app.add_url_rule('/criar_senha','criar_senha',UserManager.criar_senha,methods=['POST'])
app.add_url_rule('/keygen','gerarsenha',UserManager.gerarsenha,methods=["GET","POST"])
app.add_url_rule("/passwordgen",'passwordgen', UserManager.passwordgen, methods=["POST"])
app.add_url_rule('/passwordverifypage','passwordverifypage',UserManager.passwordverifypage,methods=["GET","POST"])
app.add_url_rule('/passwordverify','password_verify_api',UserManager.password_verify_api,methods=['POST'])


app.add_url_rule("/logout",'logout',logout,methods=['GET','POST'])
if __name__ == "__main__":
    app.run(debug=True)