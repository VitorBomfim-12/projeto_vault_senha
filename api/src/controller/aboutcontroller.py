
from flask import request,render_template

class ControlPage:
    
    @staticmethod
    def about():
        if request.method =="GET":
            return render_template("about-us.html")