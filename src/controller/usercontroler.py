from flask import Flask, request,redirect,url_for,render_template,jsonify, session
from src.service.log_req import login_required,mfa_required
from src.service.func_dbManager import DB_MANAGER

class UserManager:

    @staticmethod
    #@login_required
    #@mfa_required
    def userpage():
        user = session.get('user_id')
        if request.method=="POST":
            
            
            senha=request.form.get('senha',None)
            site=request.form.get('site',None)
            id_senha=request.form.get('cofre_id',None)
            DB_MANAGER.update_senha(id_senha,senha_hash=senha,site=site)
            return redirect(url_for('userpage'))

        return render_template('userpage.html',exibir_dados_usuario=DB_MANAGER.exibir_senhas(user))


          
   