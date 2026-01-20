Create database if NOT EXISTS Vault_76;  

          
     use Vault_76;
                   
   -- Tabela usuário 
    CREATE TABLE IF NOT EXISTS usuarios (
    id int primary key auto_increment,-- Chave que serve de FK para as duas outras tabelas
    nome varchar(50) not null, -- username do usuário
    senha_hash varchar(100) not null,-- Armazena hash da senha
    senha_temp BOOLEAN (100) not null, --Categoriza se a senha é temporária ou não
    dica varchar(30),-- Dica sobre chave mestra(principal) do usuário
    email varchar(100) not null,-- Email do usuário no Vault 74
    fingerprint varchar(100), -- Identificação do pc do usuário
    is_adm BOOLEAN DEFAULT FALSE
    
            );
    -- TABELA DO TIME DE SEGURANÇA
    CREATE TABLE IF NOT EXISTS security_team ( 
     id int auto_increment primary key,-- id do membro do time de segurança
     nome varchar(50) not null, -- nome do membro
     email varchar(100) not null-- recebera email sobre vazamento de senha por esse email
    );
    -- TABELA de senha
    CREATE TABLE IF NOT EXISTS senha (
    id_senha int primary key auto_increment, -- Id proprio dessa tabela
    senha_hash varchar(250) not null, -- Senhas armazenadas do usuário
    url varchar(250),-- Url do site da senha cadastrada
    descricao varchar(100),-- descricao da senha adicionada
    site varchar(100),-- nome do site da senha adicionada
    user_id_FK int,
    senha_segura BOOLEAN DEFAULT TRUE not null,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,   
     Foreign Key (user_id_FK) references usuarios(id)  -- chave estrangeira do id de usuarios
       ON DELETE CASCADE              
                   
                   
                   );
     -- TABELA de mfa
    CREATE TABLE IF NOT EXISTS mfa  (
    id int primary key auto_increment,-- id proprio da tabela
    user_id_FK int not null,-- chave estrangeira do id de usuarios
    cod_mfa varchar(255) not null, -- codigo temporario para verificação de 2 fatores
    cod_data_cricao DATETIME DEFAULT CURRENT_TIMESTAMP,-- cod_data_cricao
    Foreign Key (user_id_FK) references usuarios(id)    
     ON DELETE CASCADE              
    );
    
   



    -- Evento criado para deletar código de MFA expirado


   SET GLOBAL event_scheduler = ON;

-- Evento criado para deletar código de MFA expirado
CREATE EVENT IF NOT EXISTS code_mfa_expiracao 
ON SCHEDULE EVERY 10 MINUTE
DO
    DELETE FROM MFA 
    WHERE cod_data_criacao < NOW() - INTERVAL 10 MINUTE;

