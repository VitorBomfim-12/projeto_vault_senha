from flask import session,request,redirect,url_for,render_template
from src.service.email_sender import MailManager
from src.service.func_dbManager import DB_MANAGER
from src.service.log_req import login_required,login_attempt_required



class MfaVerify:

    @staticmethod
    @login_attempt_required
    def mfa():

        user_log_attempt = session.get("user_login_attempt")
        user_type = session.get("user_type")
        
       
    
        if request.method =='POST':

            cod_mfa = request.form.get("MFA")
            attempt = DB_MANAGER.identifica_mfa(user_log_attempt,cod_mfa)

        
            
            if not user_log_attempt or not user_type or not attempt: 
                session['error'] = "Algo deu errado!" 
                return (redirect(url_for('index')))
           
            
            session.clear()

            session.permanent=True
            session['mfa_passed'] = True
            session['user_id'] = user_log_attempt
            session['user_type'] = user_type

            if user_type == 'user':
                return (redirect(url_for('userpage')))
            
            if user_type == "admin": 
                return (redirect(url_for('adminpage')))
                
        if request.method == "GET":
            return render_template ('verify.html')


        
        


        