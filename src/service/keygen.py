

def password_gen(maiusculas:bool, minusculas :bool , simbolos :bool, numeros : bool, tamanho:int) -> str:
    maiusculas = True
    minusculas = True
    simbolos = True
    numeros = True
    import random
    tamanho = 24

    maius = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    minus = maius.lower()
    num = '123456789'
    sim ='!@#$%¨&*()'
    caracteres_permitidos=""
    caracteres_escolhidos=""
    if maiusculas:
        caracteres_permitidos +=maius
    if minusculas: 
        caracteres_permitidos+=minus
    if simbolos:
        caracteres_permitidos+=sim
    if numeros:
        caracteres_permitidos+=num

    for i in range(0,tamanho):
        caracter_sorteado = random.randint(0,len(caracteres_permitidos))
        caracteres_escolhidos += caracteres_permitidos[caracter_sorteado]

    print (caracteres_escolhidos)

        
