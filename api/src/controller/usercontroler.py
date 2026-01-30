from flask import Flask, request,redirect,url_for,render_template,jsonify, session
from src.service.log_req import login_required,mfa_required
from src.service.func_dbManager import DB_MANAGER
from src.service.db_sec_update import Db_Update as db_update
from src.service.keygen import password_gen
from src.service.password_verify import verifica_senha_api as verify_password_func
from flask_restx import Resource, Namespace, fields
from src.service.auth__service import AuthService



@user_ns.route('/cadastro')
class Register(Resource):
    @user_ns.expect(cadastro_model)
    def post(self):
        email = user_ns.payload.get('email')
        senha = user_ns.payload.get('senha')
        
        resultado, status = AuthService.cadastrar_usuario(email, senha)
        return resultado, status

@user_ns.route('/login')
class Login(Resource):
    @user_ns.expect(cadastro_model)
    def post(self):
        email = user_ns.payload.get('email')
        senha = user_ns.payload.get('senha')
        
        resultado, status = AuthService.validar_login(email, senha)
        return resultado, status


class UserManager:

    @staticmethod
    @login_required
    @mfa_required
    def userpage():
        user = session.get('user_id')
        
       
        if 'exibir_dados_usuario' not in session:
            db_update.update_seg_senha(user)
            session['exibir_dados_usuario'] = DB_MANAGER.exibir_senhas(user)
        return render_template('userpage.html')

    @login_required
    @mfa_required
    @staticmethod
    def update_senha():
        if request.method=="POST":
            
            
            senha=request.form.get('senha',None)
            site=request.form.get('site',None)
            id_senha=request.form.get('cofre_id',None)
            DB_MANAGER.update_senha(id_senha,senha_hash=senha,site=site)

            user = session.get('user_id')
            session.pop('exibir_dados_usuario')
            db_update.update_seg_senha(user,id_senha)
            session['exibir_dados_usuario'] = DB_MANAGER.exibir_senhas(user)
            return redirect(url_for('userpage'))
        
    @login_required
    @mfa_required
    @staticmethod
    def deletar_senha():
        if request.method=="POST":
            id_senha=request.form.get('cofre_id',None)
            DB_MANAGER.deletar_senha(id_senha)


            user = session.get('user_id')
            session.pop('exibir_dados_usuario')
            db_update.update_seg_senha(user)
            session['exibir_dados_usuario'] = DB_MANAGER.exibir_senhas(user)
            return redirect(url_for('userpage'))
    @login_required
    @mfa_required  
    @staticmethod
    def criar_senha():
           if request.method=="POST":
            user=session.get('user_id')
            nome=request.form.get('nome_site')
            senha=request.form.get('senha')
            url=request.form.get('url',None)
            descricao=request.form.get('descricao',None)
            DB_MANAGER.inserir_senhas(senha,url,descricao,nome,user)


            user = session.get('user_id')
            session.pop('exibir_dados_usuario')
            db_update.update_seg_senha(user)
            session['exibir_dados_usuario'] = DB_MANAGER.exibir_senhas(user)

            
            return redirect(url_for('userpage'))
 

    @staticmethod
    @login_required
    @mfa_required
    def gerarsenha():
        if request.method =="GET":
            return render_template('keygen.html')
    
    @staticmethod
    def passwordgen():
        if request.method=="POST":
            parametros = request.get_json()
            maiusculas = parametros.get("maiusculas")
            numeros = parametros.get("numeros")
            simbolos = parametros.get("simbolos")
            tamanho = parametros.get("tamanho")

            password = password_gen(maiusculas,simbolos,numeros,tamanho)
            password_json = {"valor":password}
            return jsonify(password_json)
    
    @login_required
    @mfa_required
    @staticmethod
    def passwordverifypage():
        if request.method =="GET":
            return render_template('password-verify.html')
        
    @staticmethod
    def password_verify_api():
        if request.method =="POST":
            password_json = request.get_json()
            senha = password_json.get('senha')
            verify_pass_response =verify_password_func(senha,True)
            print (verify_pass_response)
            print(senha)

            response_pass_json = {"response":verify_pass_response}
            return jsonify(response_pass_json)
            
                
