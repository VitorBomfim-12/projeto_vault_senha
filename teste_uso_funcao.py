from src.service.password_verify import verifica_senha_api as vsa
from src.service.func_dbManager import DB_MANAGER as dm

con=dm.db_connect()
cur= con.cursor()

sql =''' SELECT senha_hash FROM senha '''
cur.execute(sql)
senhas_banco = cur.fetchall()

for senhas in senhas_banco:
   print(dm.descrip_senha(senhas['senha_hash']))
   print(vsa(senhas['senha_hash']))
   print(f'\n')

print (vsa('senha123',True))