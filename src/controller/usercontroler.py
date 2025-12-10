from flask import Flask, request,redirect,url_for,render_template

class MyFlaskApp:
    
    @staticmethod
    def index():
        if request.method == "POST":
            email = request.form['email']
            senha = request.form['senha']
            print(email,senha)

            if not email or not senha:
                return render_template ("index.html", error = "Preencha todos os campos!")
            
            else:
                print("sucesso!!!")
                return redirect(url_for('index'))
          
        return render_template ('index.html')
    


          
   