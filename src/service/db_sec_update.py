import pymysql,os,dotenv
from src.service.password_verify import verifica_senha_api as verify_pass
dotenv.load_dotenv()

class Db_Update:
    
    
    @staticmethod
    def db_connect():
       connection = pymysql.connect(host='localhost',
                                 user='root',
                                 password=os.getenv("DB_password"),
                                 database='Vault_76',
                                 cursorclass=pymysql.cursors.DictCursor)
       return connection
     
    @staticmethod
    def update_seg_senha(user_id):
        alteracao=False
        con = Db_Update.db_connect()
        cur = con.cursor()
        sql = "SELECT id_senha,senha_hash FROM senha WHERE user_id_FK = %s"
        cur.execute(sql,user_id)
        senhas_usuario = cur.fetchall()
        for senha in senhas_usuario:
            status_senha = verify_pass(senha['senha_hash'],False)

            if status_senha:
                alteracao = True
                sql='UPDATE senha SET senha_segura =%s WHERE id_senha = %s'
                cur.execute(sql,(0,senha['id_senha']))

        if alteracao:     
         con.commit()
         print("alteração de segurança feita!")

        cur.close()
        con.close()
         