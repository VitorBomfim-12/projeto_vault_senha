import random

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

    for i in range(0,tamanho):
        caracter_sorteado = random.randint(0,len(caracteres_permitidos)-1)
        caracteres_escolhidos += caracteres_permitidos[caracter_sorteado]

    return caracteres_escolhidos

