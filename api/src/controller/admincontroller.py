from flask import Flask, request,redirect,url_for,render_template,jsonify
from src.service.log_req import login_required,mfa_required


class AdminManager:
    
    @staticmethod
    @login_required
    @mfa_required
    def adminpage():
        pass


          