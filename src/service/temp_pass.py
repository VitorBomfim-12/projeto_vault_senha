from functools import wraps
from flask import session,redirect,url_for
import pymysql
import os
import dotenv
import bcrypt
from dotenv import load_dotenv

 
def db_connect():
   connection = pymysql.connect(host='localhost',
                                 user='root',
                                 password=os.getenv("DB_password"),
                                 database='Vault_76',
                                 cursorclass=pymysql.cursors.DictCursor)
   return connection

def temp_pass_identify(user_id):
  
        con = db_connect()
        cur = con.cursor()
        sql = "SELECT senha_temp FROM usuarios WHERE id = %s"
        cur.execute(sql,user_id)
        status_senha = cur.fetchone()
        cur.close()
        con.close()
        
        if status_senha['senha_temp'] == True:
            return True
        return False
        
   