from flask import session,request,redirect,url_for,render_template
from src.service.email_sender import MailManager
from src.service.func_dbManager import DB_MANAGER
from src.service.log_req import login_required



class MfaVerify:

    @staticmethod
    @login_required
    def mfa():

        user_log_attempt = session.get("user_login_attempt")
        user_type = session.get("user_type")
        
       
    
        if request.method =='POST':

            cod_mfa = request.form.get("MFA")
            attempt = DB_MANAGER.identifica_mfa(user_log_attempt,cod_mfa)

            print (user_log_attempt,user_type, attempt)
            
            if not user_log_attempt or not user_type or not attempt: 
                DB_MANAGER.deletar_mfa(user_log_attempt)
                return (redirect(url_for('index',error = 'Algo deu errado!')))
           
            
            session.clear()

            session['mfa_passed'] = 'True'
            session['user_id'] = user_log_attempt
            session['user_type'] = user_type
            DB_MANAGER.deletar_mfa(user_log_attempt)

            if user_type == 'user':
                return (redirect(url_for('userpage')))
            
            if user_type == "admin": 
                return (redirect(url_for('adminpage')))
                
        if request.method == "GET":
            return render_template ('verify.html')


        
        


        