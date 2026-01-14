from flask import session,redirect,url_for
from src.service.log_req import login_required,mfa_required


@login_required
@mfa_required
def logout():
    session.clear()
    return(redirect(url_for('index')))