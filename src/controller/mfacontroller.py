from flask import session,request,redirect,url_for,render_template
from service.email_sender import MailManager
from src.service.func_dbManager import DB_MANAGER



class MfaVerify:

    @staticmethod
    def mfa():

        user_log_attempt = session.get("user_login_attempt",None)
        user_type = session.get("user_type")

    
        if request.method =='POST':

            cod_mfa = request.form.get("MFA")
            attempt = DB_MANAGER.indetificar_mfa(user_log_attempt,cod_mfa)

            if not user_log_attempt or not user_type or not attempt: 
                return (redirect(url_for('index'),error = 'Algo deu errado!'))
            
            if user_type == 'user':
                return (redirect(url_for('userpage')))
            
            if user_type == "admin": 
                return (redirect(url_for('adminpage')))
                
        return render_template ('verify.html')


        
        


        