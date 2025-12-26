import requests,hashlib
from func_dbManager import DB_MANAGER as dm

def verifica_senha_api(senha:str) -> bool:

    senha_cripto = dm.criptografar_senha(senha)
    senha_descripto = dm.descrip_senha(senha_cripto)

    # criação de um objeto SHA-1, transformando a string "senha_descripto" em bytes,
    #que são aceitos em algorítmos de criptografia 
    senha_hash_objeto = hashlib.sha1(senha_descripto.encode('utf-8'))
    senha_hash_hex = senha_hash_objeto.hexdigest()
  

    # seleção dos 5 primeiros caracteres da senha para envio a API
    # padronização, os paracteres precisam sem maiúsculos.
    caracteres_api = senha_hash_hex[:5]
    caracteres_api = caracteres_api.upper()
    print (f'\n 5 primeiros digitos do SHA-1\n{caracteres_api}')

    # seleção e padronização do sufixo da senha para comparação com o texto de retorno da API
    sufix_senha =  senha_hash_hex[5:]
    sufix_senha=sufix_senha.upper()
    print(f'\n Sufixo da senha \n{sufix_senha}')

    # envio dos caracteres, tratamento da resposta e comparação entre o os sufixos da APi e
    #o sufixo local
    teste_resposta = requests.get(f'https://api.pwnedpasswords.com/range/{caracteres_api}')
    resposta_linhas = teste_resposta.text.splitlines()

    for linha in resposta_linhas:

        sufixo_api, contagem = linha.split(':')
        if sufixo_api == sufix_senha:
            print(f'\n A senha foi encontrada em {contagem} vazamentos')
