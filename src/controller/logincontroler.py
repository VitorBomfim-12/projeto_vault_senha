from src.service.email_sender import MailManager
from flask import Flask, request,redirect,url_for,render_template,session
from src.service.hash import hash_verify
from src.service.func_dbManager import DB_MANAGER
import bcrypt



class LoginManager:

    @staticmethod
    def index():
        if request.method == "POST":
            
            email = request.form.get('email',None)
            senha = request.form.get('senha',None)
            hash_fijs = request.form.get('finger',None)
            tentativa_suspeita=request.form['user_session_id']
            
            if tentativa_suspeita:
                return redirect(url_for('index'))
                
            if not email or not senha:
                return (redirect(url_for('index'), error = "Preencha todos os campos!"))

            else:
                
                status_user,user_id,user_fingerprint= DB_MANAGER.indentify_user(email,senha)

                if not status_user : return (redirect(url_for('index'), error='email ou senha incorretos!'))

             
                session['user_login_attempt'] = user_id
                session['user_type'] = status_user

                if not hash_fijs or not hash_verify(hash_fijs) or (user_fingerprint != hash_fijs):
                    MailManager.mfa_mail_sender(user_id)
                    return (redirect(url_for('mfa')))
               
                if status_user == 'user': return (redirect(url_for('userpage')))
                
                if status_user =='admin':# return (redirect(url_for('userpage')))
                    pass
                    #criar rota de ADM
        if request.method =="GET":
            return render_template ('index.html')