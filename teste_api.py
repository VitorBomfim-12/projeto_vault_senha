import requests,hashlib
from src.service.func_dbManager import DB_MANAGER as dm

senha = (input("insira uma senha: "))
senha_cripto = dm.criptografar_senha(senha)
senha_descripto = dm.descrip_senha(senha_cripto)

senha_hash_objeto = hashlib.sha1(senha_descripto.encode('utf-8'))
senha_hash_hex = senha_hash_objeto.hexdigest()
print (f'\n Senha SHA-1 \n{senha_hash_hex}')

caracteres_api = senha_hash_hex[:5]
caracteres_api = caracteres_api.upper()
print (f'\n 5 primeiros digitos do SHA-1\n{caracteres_api}')


sufix_senha =  senha_hash_hex[5:]
sufix_senha=sufix_senha.upper()
print(f'\n Sufixo da senha \n{sufix_senha}')

teste_resposta = requests.get(f'https://api.pwnedpasswords.com/range/{caracteres_api}')

resposta_linhas = teste_resposta.text.splitlines()

for linha in resposta_linhas:

    sufixo_api, contagem = linha.split(':')
    if sufixo_api == sufix_senha:
        print(f'\n A senha foi encontrada em {contagem} vazamentos')


