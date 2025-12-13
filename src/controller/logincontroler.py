from flask import Flask, request,redirect,url_for,render_template,session
from src.service.hash import hash_verify
from src.service.func_dbManager import DB_MANAGER


class LoginManager:

    @staticmethod
    def index():
        if request.method == "POST":
            
            email = request.form['email']
            senha = request.form['senha']
            hash_fijs = request.form['finger']
            tentativa_suspeita=request.form['user_session_id']

            print(hash_fijs)
            
            if tentativa_suspeita:
                return redirect(url_for('index'))
                
            if not email or not senha:
                return redirect ("index.html", error = "Preencha todos os campos!")

            else:
                
                status_user,user_id = DB_MANAGER.indentify_user(email,senha)

                if not status_user : return (redirect('index.html', error ="este usuário não existe!"))

                session['user_login_attempt'] = user_id
                
                if not hash_fijs or not hash_verify():
                 return (redirect(url_for('mfa')))
               
                if status_user == 'user': return (redirect(url_for('userpage')))

                if status_user =='admin':# return (redirect(url_for('userpage')))
                    pass
                    #criar rota de ADM
          
        return render_template ('index.html')