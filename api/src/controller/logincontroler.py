from src.service.email_sender import MailManager
from flask import Flask, request,redirect,url_for,render_template,session
from src.service.hash import hash_verify
from src.service.func_dbManager import DB_MANAGER
from flask_restx import Resource, Namespace, fields
from src.service.temp_pass import  temp_pass_identify as temp_pass



user_log_trial = Namespace('auth', description = 'Opreações de autenticação')
cadastro_model = user_log_trial.model('Login', {
    'email': fields.String(required=True, description='Email do usuário'),
    'senha': fields.String(required=True, description='Senha do usuário')
   
})

@user_log_trial.route('/login')
class Login(Resource):
    @user_log_trial.expect(cadastro_model)
    def post(self):
        email = user_log_trial.payload.get('email')
        senha = user_log_trial.payload.get('senha')
        

        status_user,user_id,user_fingerprint= DB_MANAGER.indentify_user(email,senha)
        if temp_pass(user_id):
            MailManager.mfa_mail_sender(user_id)
            return {'status':'erro','message':'Necessário alterar a senha'},428
        
        elif status_user:
           MailManager.mfa_mail_sender(user_id)
           return {"status": "Login verificado", "message": "email e senhas corretos"}, 200
        
        else:
           return {"status": "erro", "message": "Email ou senha incorretos"}, 401
        

        
        

        
         

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
                  session['error'] = 'Preencha todos os campos'
                  return (redirect(url_for('index')))

            else:
                
                status_user,user_id,user_fingerprint= DB_MANAGER.indentify_user(email,senha)

                if not status_user :
                    session['error'] = "Usuário ou senha incorretos!"
                    return (redirect(url_for('index')))

             
                
                session['user_type'] = status_user

                if not hash_fijs or not hash_verify(hash_fijs) or (user_fingerprint != hash_fijs):
                    session['mfa_passed']=False
                    session['user_login_attempt'] = user_id
                    MailManager.mfa_mail_sender(user_id)
                
                    return (redirect(url_for('mfa')))
               
                session.permanent = True
                session['mfa_passed'] = True
                session['user_id'] = user_id
                if status_user == 'user': 
                
                    return (redirect(url_for('userpage')))
                
                if status_user =='admin':# return (redirect(url_for('userpage')))
                    pass
                    #criar rota de ADM
        if request.method =="GET":
            return render_template ('index.html',error=session.get('error', None))
        