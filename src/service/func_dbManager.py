import pymysql
import os
from dotenv import load_dotenv
load_dotenv()


               

class DB_MANAGER:
     #CONECTAR AO BANCO SQL
     @staticmethod
     def db_connect():
       connection = pymysql.connect(host='localhost',
                                 user='root',
                                 password=os.getenv("DB_password"),
                                 database='Vault_76',
                                 cursorclass=pymysql.cursors.DictCursor)
       return connection
     # FIM 

     # INSERIR DADOS DO USUARIO
     @staticmethod
     def inserir_usuario(nome,senha_hash,dica,email):
          connect=DB_MANAGER.db_connect()
          cursor=connect.cursor()
          sql="INSERT INTO usuarios(nome,senha_hash,dica,email) values(%s,%s,%s,%s)"
          cursor.execute(sql,(nome,senha_hash,dica,email))
          connect.commit()
          if cursor.close() and connect.close():
               print("FECHOU")
      # FIM
       
      
            


