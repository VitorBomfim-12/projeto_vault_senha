import random,re

def password_gen(maiusculas:bool, simbolos :bool, numeros : bool, tamanho:int) -> str:
   
    qualidade_senha=True
    tamanho = int(tamanho)
    maius = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    minus = maius.lower()
    num = '123456789'
    sim ='!@#$%¨&*()'

    
    caracteres_permitidos=""
    caracteres_escolhidos=""
    caracteres_permitidos+=minus
    padrao= f"["
    padrao+= re.escape(minus)
    if maiusculas:
        caracteres_permitidos +=maius
        padrao+= re.escape(maius)
    if simbolos:
        caracteres_permitidos+=sim
        padrao+= re.escape(sim)
    if numeros:
        caracteres_permitidos+=num
        padrao+= re.escape(num)

    padrao+="]"
    while True:    
        caracteres_escolhidos=""

        for i in range(0,tamanho-1):
            caracter_sorteado = random.randrange(0,len(caracteres_permitidos))
            caracteres_escolhidos += caracteres_permitidos[caracter_sorteado]
        if re.fullmatch(f'{padrao}+',caracteres_escolhidos):
           return caracteres_escolhidos
         



                
                
                
            
    

