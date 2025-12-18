from functools import wraps
from flask import session,redirect,url_for

def login_required(f):
    wraps(f)
    def decorator(*args,**kwargs):
        if 'user_id' not in session:
            return (redirect(url_for('index')))
        return f(*args,**kwargs)
    
    return decorator

def mfa_required(f):
    wraps(f)
    def decorator(*args,**kwargs):
        if 'mfa_passed' not in session or session['mfa_passed']=='False':
            return (redirect(url_for('index')))
        return f(*args,**kwargs)
    
    return decorator
