import pymysql,os,dotenv
from src.service.password_verify import verifica_senha_api as verify_pass
from src.service.func_dbManager import DB_MANAGER as db
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
    def update_seg_senha(user_id : int, id_senha = None) -> None:
        id_senha = int(id_senha)
        con = Db_Update.db_connect()
        cur = con.cursor()
        sql = "SELECT id_senha,senha_hash FROM senha"
        alteracao=False

        if id_senha:
            sql_sufix=' WHERE id_senha = %s'
            sql+= sql_sufix
            print(sql)
            cur.execute(sql,(id_senha,))
        
        else:
            sql_sufix = " WHERE user_id_FK = %s"
            sql+=sql_sufix
            cur.execute(sql,(user_id,))
            

        
        senhas_usuario = cur.fetchall()
        for senha in senhas_usuario:
            status_senha = verify_pass(senha['senha_hash'],False)

            if status_senha:
                alteracao = True
                sql='UPDATE senha SET senha_segura =%s WHERE id_senha = %s'
                print (db.descrip_senha(senha['senha_hash']))
                cur.execute(sql,(0,senha['id_senha']))
            else:
                alteracao = True
                sql='UPDATE senha SET senha_segura =%s WHERE id_senha = %s'
                cur.execute(sql,(1,senha['id_senha']))
               

        if alteracao:     
         con.commit()
         print("alteração de segurança feita!")

        cur.close()
        con.close()
         