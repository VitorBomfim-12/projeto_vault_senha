import pymysql
import os
import dotenv
import bcrypt
from dotenv import load_dotenv
import random
from cryptography.fernet import Fernet


load_dotenv()
chave=os.getenv('chave')
fernet=Fernet(chave)

               

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
     def inserir_usuario(nome : str,senha_hash : str,dica : str,email : str,fingerprint : str):
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
     def hash_da_senha(senha : str): # FUNÇÃO AUXILIAR DA |inserir_usuario|
      salt=bcrypt.gensalt()
      hashed=bcrypt.hashpw(senha.encode('utf-8'),salt)
      return hashed
      # FIM


      #INSERIR AS SENHAS DO USUARIO NA PLATAFORMA VAULT 76
     @staticmethod
     def inserir_senhas(senha_hash : str,url : str,descricao : str,site : str,user_id_FK : int):
         connect=DB_MANAGER.db_connect()
         cursor=connect.cursor()
         sql="INSERT INTO senha(senha_hash,url,descricao,site,user_id_FK) values(%s,%s,%s,%s,%s)"
         senha_hash=DB_MANAGER.criptografar_senha(senha_hash)
         
         cursor.execute(sql,(senha_hash,url,descricao,site,user_id_FK))
         connect.commit()
         cursor.close()
         connect.close()

     @staticmethod
     def criptografar_senha(senha : str): # Função auxiliar da inserir_senhas
           return  fernet.encrypt(senha.encode()).decode() 
     
     # FIM
     
     # INSERÇÃO DO MFA
     @staticmethod
     def gerador_mfa(user_id_FK : int):
       
       senha_6_digitos = random.randint(100000, 999999)
       

       connect=DB_MANAGER.db_connect()
       cursor=connect.cursor()
       sql="INSERT INTO mfa(user_id_FK,cod_mfa) values(%s,%s)"
       cursor.execute(sql,(user_id_FK,senha_6_digitos))
       connect.commit()
       cursor.close()
       connect.close()

       return senha_6_digitos
     
        
     ### FIM DAS FUNÇÕES DE INSERÇÃO DE DADOS
     #-------------------------------------------------------------------------------------------------
    
    
    
    
     ### FUNÇÕES DE EXIBIÇÃO DE DADOS
     @staticmethod
     def exibir_senhas(user_id : int):
            con=DB_MANAGER.db_connect()
            cursor=con.cursor()
            sql="SELECT id_senha,senha_hash,url,site,descricao FROM senha WHERE user_id_FK=%s ORDER BY site"
            cursor.execute(sql,(user_id,))
            senhas_do_usuario=cursor.fetchall()
            for senha in senhas_do_usuario:
                if 'senha_hash' in senha:
                    senha['senha_hash']=DB_MANAGER.descrip_senha(senha['senha_hash'])
                    
            cursor.close()    
            con.close()
            
            return senhas_do_usuario
     @staticmethod
     def descrip_senha(senha : int):#Função auxiliar da |exibir_senhas|
           
        return fernet.decrypt(senha.encode()).decode() 
     
    #FIM DAS FUNÇÕES DE IDENTIFICAÇÃO
      
    
    
    
    
    
     # FUNÇÕES DE IDENTIFICAÇÃO
     @staticmethod
     def indentify_user(email : str, senha: str) -> tuple [str , str]:
          
          con=DB_MANAGER.db_connect()
          cursor=con.cursor()
          sql = "SELECT email,senha_hash,is_admin,fingerprint FROM usuarios WHERE email = %s "
          cursor.execute(sql,(email))
          usuario = cursor.fetchone()
          cursor.close()
          con.close()

          if not usuario or not bcrypt.check_password_hash(usuario['senha_hash'],senha):
            return False
          
          if bcrypt.check_password_hash(usuario['senha_hash'],senha) and usuario['is_admin'] == False:
              return 'user',usuario['id'],usuario['fingerprint']
          
          if  bcrypt.check_password_hash(usuario['senha_hash'],senha) and usuario['is_admin'] == True:
              return 'admin',usuario['id'],usuario['fingerprint']
          
     @staticmethod   
     def identifica_mfa(user_id,senha_mfa):
         con=DB_MANAGER.db_connect()
         cur=con.cursor()
         sql="SELECT cod_mfa FROM mfa WHERE user_id_FK=%s"
         cur.execute(sql,(user_id,))
         resultado=cur.fetchone()
         cur.close()
         con.close()
         if not resultado:
            return False
         senha_mfa_banco=resultado['cod_mfa']


         
        
         
         return senha_mfa==senha_mfa_banco
     
     #FIM DE FUNÇÕES DE IDENTIFICAÇÃO     
     #------------------------------------------------------------------- 
     # FUNÇÕES DE DELETE
     @staticmethod
     def deletar_mfa(id_user_FK : int):
         con=DB_MANAGER.db_connect()
         cursor=con.cursor()
         sql="DELETE FROM mfa WHERE user_id_FK=%s"
         cursor.execute(sql,(id_user_FK,))
         con.commit()
         cursor.close()
         con.close()
         
     @staticmethod
     def deletar_senha(id_senha : int):
         con=DB_MANAGER.db_connect()
         cursor=con.cursor()
         sql='DELETE FROM senha WHERE id_senha=%s'
         cursor.execute(sql,(id_senha,))
         con.commit()
         cursor.close()
         con.close()
    
     @staticmethod
     def deletar_usuario(email : str):
         con=DB_MANAGER.db_connect()
         cursor=con.cursor()
         sql="DELETE FROM usuarios WHERE email=%s"
         cursor.execute(sql,(email))
         con.commit()
         cursor.close()
         con.close()


    #função update senha ]
     @staticmethod
     def update_senha(id_senha,senha_hash ,url =None,descricao=None ,site=None  ):
         definir_update={
             'senha_hash':DB_MANAGER.criptografar_senha(senha_hash),
             'url':url,
             'descricao':descricao,
             'site':site
         }
         tupla_update=()
         con=DB_MANAGER.db_connect()
         cursor=con.cursor()
         sql="UPDATE senha SET "
         for chave,valor in definir_update.items():
               if valor:
                   sql+=f"{chave}= %s,"
                   tupla_update+=(valor,)
         tupla_update+=(id_senha,)
         sql=sql[:-1]+"WHERE id_senha=%s"
         cursor.execute(sql,tupla_update)
         con.commit()
         cursor.close()
         con.close()
         

