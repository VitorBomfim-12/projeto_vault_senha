import pymysql
from src.extensions import mail
from flask_mail import Message
from src.service.func_dbManager import DB_MANAGER
import os
import dotenv
from dotenv import load_dotenv

dotenv.load_dotenv()

class MailManager :
    
    @staticmethod
    def mfa_mail_sender(user_id):
        con = DB_MANAGER.db_connect()
        if con:    
            user_id = int(user_id)
            cur = con.cursor()
            sql= "SELECT email FROM USUARIOS WHERE id =%s"
            cur.execute(sql,(user_id,))
            user = cur.fetchone()
            cur.close()
            con.close()
            
            
            mfa_code = DB_MANAGER.gerador_mfa(int(user_id))
            msg =  Message(subject=f" Código de verificação ", sender = os.getenv('DEL_MAIL'), recipients=[user['email']])
            msg.body = f''' O seu código de verificação é {mfa_code} '''
            mail.send(msg)
            return True
        else: 
            return False


