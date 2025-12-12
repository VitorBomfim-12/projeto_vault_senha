from func_dbManager import DB_MANAGER
import dotenv
from dotenv import load_dotenv
import os
from werkzeug.security import generate_password_hash

senha_adm = os.getenv("SENHA_ADM")
email_adm = os.getenv('EMAIL_ADM')

DB_MANAGER.inserir_usuario('adm_master',senha_adm,'o que estamos fazendo?',email_adm)

