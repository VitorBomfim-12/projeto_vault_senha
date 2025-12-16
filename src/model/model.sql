Create database Vault_76;  
          
     use Vault_76;
                   
   -- Tabela usuário 
    CREATE TABLE usuarios(
    id int primary key auto_increment,-- Chave que serve de FK para as duas outras tabelas
    nome varchar(50) not null, -- username do usuário
    senha_hash varchar(100) not null,-- Armazena hash da senha
    dica varchar(30),-- Dica sobre chave mestra(principal) do usuário
    email varchar(100) not null,-- Email do usuário no Vault 74
    fingerprint varchar(100), -- Identificação do pc do usuário
    is_adm BOOLEAN DEFAULT FALSE
    
            );
    -- TABELA DO TIME DE SEGURANÇA
    CREATE TABLE security_team( 
     id int auto_increment primary key,-- id do membro do time de segurança
     nome varchar(50) not null, -- nome do membro
     email varchar(100) not null-- recebera email sobre vazamento de senha por esse email
    );
    -- TABELA de senha
    CREATE TABLE senha(
    id_senha int primary key auto_increment, -- Id proprio dessa tabela
    senha_hash varchar(100) not null, -- Senhas armazenadas do usuário
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
    CREATE TABLE mfa(
    id int primary key auto_increment,-- id proprio da tabela
    user_id_FK int not null,-- chave estrangeira do id de usuarios
    cod_mfa varchar(255) not null, -- codigo temporario para verificação de 2 fatores
    cod_data_cricao DATETIME DEFAULT CURRENT_TIMESTAMP,-- cod_data_cricao
    Foreign Key (user_id_FK) references usuarios(id)    
     ON DELETE CASCADE              
    );
    
    SET GLOBAL event_schedular = ON;
    --Evento criado para deletar código de MFA expirado
    CREATE EVENT code_mfa_expiracao
    ON SCHEDULE EVERY 10 MINUTE
    STARTS CURRENT_TIMESTAMP + INTERVAL 1 MINUTE
    DO
      DELETE FROM MFA WHERE CURRENT_TIMESTAMP - cod_data_cricao > 10 MINUTE
    END;
   