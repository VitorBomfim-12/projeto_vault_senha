from flask import Flask, request,redirect,url_for,render_template

class LoginManager:

    @staticmethod
    def index():
        if request.method == "POST":
            
            email = request.form['email']
            senha = request.form['senha']
            hash_fijs = request.form['finger']
            tentativa_suspeita=request.form['user_session_id']
            
            if tentativa_suspeita:
                print("tentantiva suspeita!")
                return redirect(url_for('index'))
                # usar o conceito de honeypot field para detectar ataques de bots.
            print(hash_fijs)
            if not email or not senha:
                return redirect ("index.html", error = "Preencha todos os campos!")
            
            else:
                print("sucesso!!!")
                return redirect(url_for('index'))
          
        return render_template ('index.html')