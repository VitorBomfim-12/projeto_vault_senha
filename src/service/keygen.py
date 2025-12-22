import random,re

def password_gen(maiusculas:bool, simbolos :bool, numeros : bool, tamanho:int) -> str:
   
    tamanho = int(tamanho)
    maius = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    minus = maius.lower()
    num = '123456789'
    sim ='!@#$%¨&*()'

    
    caracteres_permitidos=""
    caracteres_escolhidos=""
    caracteres_permitidos+=minus
    
    if maiusculas:
        caracteres_permitidos +=maius
    
    if simbolos:
        caracteres_permitidos+=sim
    
    if numeros:
        caracteres_permitidos+=num
    
    while True:    
        qualidade_senha=True
        caracteres_escolhidos=""

        for i in range(tamanho):
           caracteres_escolhidos+= random.choice(caracteres_permitidos)

        if numeros and not re.search(r'[0-9]',caracteres_escolhidos):
            qualidade_senha = False
        if simbolos and not re.search(f"[{re.escape(sim)}]",caracteres_escolhidos):
            qualidade_senha = False
        if maiusculas and not re.search(r'[A-Z]',caracteres_escolhidos):
            qualidade_senha = False      

        if qualidade_senha:
            return caracteres_escolhidos
        
print(password_gen(True,True,True,12))
