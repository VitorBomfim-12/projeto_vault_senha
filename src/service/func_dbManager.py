import pymysql
import os
import bcrypt
from dotenv import load_dotenv
from datetime import datetime
import random
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
     #-----------------------------------------------------------------

     ### FUNÇOES DE INSERÇÃO DE DADOS


     # INSERIR DADOS DO USUARIO PARA LOGIN
     
       
     @staticmethod
     def inserir_usuario(nome,senha_hash,dica,email,fingerprint):
          connect=DB_MANAGER.db_connect()
          cursor=connect.cursor()
          sql="INSERT INTO usuarios(nome,senha_hash,dica,email,fingerprint) values(%s,%s,%s,%s,%s)"

          senha_hash=DB_MANAGER.hash_da_senha(senha_hash)

          cursor.execute(sql,(nome,senha_hash,dica,email,fingerprint))

          connect.commit()

          cursor.close()

          connect.close()
     # Função do bcrypt para gerar hash da senha
     @staticmethod
     def hash_da_senha(senha): # FUNÇÃO AUXILIAR DA inserir_usuario
      salt=bcrypt.gensalt()
      hashed=bcrypt.hashpw(senha.encode('utf-8'),salt)
      return hashed
      # FIM


      #INSERIR AS SENHAS DO USUARIO NA PLATAFORMA VAULT 76
     @staticmethod
     def inserir_senhas(senha_hash,url,descricao,site,user_id_FK):
         connect=DB_MANAGER.db_connect()
         cursor=connect.cursor()
         sql="INSERT INTO senha(senha_hash,url,descricao,site,user_id_FK) values(%s,%s,%s,%s,%s)"
         cursor.execute(sql,(senha_hash,url,descricao,site,user_id_FK))
         connect.commit()
         cursor.close()
         connect.close()
     # FIM
     
     # INSERÇÃO DO MFA
     @staticmethod
     def gerador_mfa(user_id_FK):
       
       senha_6_digitos = random.randint(100000, 999999)
       horario=datetime.now()

       connect=DB_MANAGER.db_connect()
       cursor=connect.cursor()
       sql="INSERT INTO mfa(user_id_FK,cod_mfa,cod_data_cricao) values(%s,%s,%s)"
       cursor.execute(sql,(user_id_FK,senha_6_digitos,horario))
       connect.commit()
       cursor.close()
       connect.close()
     
        
     ### FIM DAS FUNÇÕES DE INSERÇÃO DE DADOS
     #-------------------------------------------------------------------------------------------------


