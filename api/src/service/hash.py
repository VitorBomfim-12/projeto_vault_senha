import re 
def hash_verify(hash):
    hash=hash.lower()
    padrao=r'^[a-z0-9]{16,40}$'

    if not re.match(padrao,hash):
            return False
    

    return True




