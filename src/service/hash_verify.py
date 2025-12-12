
def hash_verify(hash):
    
    if len(hash) < 32:
        return False
    
    for caractere in hash:
        if caractere.isupper():return False
