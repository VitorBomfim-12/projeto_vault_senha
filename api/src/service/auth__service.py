from src.model.user_model import User

usuarios_db = {}

class AuthService:
    @staticmethod
    def cadastrar_usuario(email, senha):
        if email in usuarios_db:
            return {"erro": "Usuário já existe"}, 400
        
        novo_user = User(email, senha)
        usuarios_db[email] = novo_user
        return {"status": "sucesso", "message": "Usuário criado!"}, 201

    @staticmethod
    def validar_login(email, senha):
        user = usuarios_db.get(email)
        if user and user.senha == senha:
            return {"status": "sucesso", "message": f"Bem-vindo {email}!"}, 200
        return {"status": "erro", "message": "Email ou senha incorretos"}, 401