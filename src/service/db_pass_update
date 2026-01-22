import pymysql,os,dotenv
from src.service.func_dbManager import DB_MANAGER as dbm

dotenv.load_dotenv()

class DbPassUpdate:
    
    
    @staticmethod
    def db_connect():
       connection = pymysql.connect(host='localhost',
                                 user='root',
                                 password=os.getenv("DB_password"),
                                 database='Vault_76',
                                 cursorclass=pymysql.cursors.DictCursor)
       return connection
    
    @staticmethod
    def passoword_db_change(user_id,new_pass):
        new_pass_hashed = dbm.hash_da_senha(new_pass)
        con = DbPassUpdate.db_connect()
        cur = con.cursor()
        sql = "UPDATE usuarios SET senha_hash = %s WHERE id = %s"
        cur.execute(sql,(new_pass_hashed,user_id))
        cur.close()
        con.close()
     