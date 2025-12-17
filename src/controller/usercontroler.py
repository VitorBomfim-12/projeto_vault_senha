from flask import Flask, request,redirect,url_for,render_template,jsonify


class UserManager:
    
    @staticmethod
    def userpage():
        return render_template('userpage.html')


          
   