from flask import Flask, request,redirect,url_for,render_template,session
from src.service.password_verify import verifica_senha_api as vsa
from src.service.db_pass_update import DbPassUpdate as dbu


class PassChange:

    def pass_change():
        if request.method == "POST":
            new_pass = request.form.get("new-pass")
            new_pass_confirm = request.form.get("new-pass-confirm")
            if new_pass != new_pass_confirm:
                session['error'] = "As senhas não são iguais!"
            
            if vsa(str(new_pass), True):
                session['error'] = "A senha não é segura! tente umas mais forte."

            user_type = session.get("user_type")
            user_id = session.get('user_login_attempt')

            dbu.passoword_db_change(new_pass,user_id)
            
            session.clear()

            session.permanent=True
            session['mfa_passed'] = True
            session['user_id'] = user_id
            session['user_type'] = user_type

            if user_type == 'user':
                return (redirect(url_for('userpage')))
            
            if user_type == "admin": 
                return (redirect(url_for('adminpage')))
            

        


    