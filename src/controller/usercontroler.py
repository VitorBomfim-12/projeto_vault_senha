from flask import Flask, request,redirect,url_for,render_template,jsonify

class MyFlaskApp:
    
    @staticmethod
    def index():
        if request.method == "POST":
            email = request.form['email']
            senha = request.form['senha']
            hash_fijs = request.form['finger']
            print(hash_fijs)
            if not email or not senha:
                return redirect ("index.html", error = "Preencha todos os campos!")
            
            else:
                print("sucesso!!!")
                return redirect(url_for('index'))
          
        return render_template ('index.html')
    


          
   