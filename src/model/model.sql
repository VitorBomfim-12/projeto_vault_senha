Create database Vault_76;              
     use Vault_76;
                   
    
    CREATE TABLE usuarios(
    id int primary key auto_increment,
    nome varchar(50) not null,
    senha_hash varchar(100) not null,
    dica varchar(30),
    email varchar(100) not null,
    fingerprint varchar(100)
                   
    );
    CREATE TABLE senha(
    id_senha int primary key auto_increment,
    senha_hash varchar(100) not null,
    url varchar(250),
    descricao varchar(100),
    site varchar(100),
    user_id_FK int,
    Foreign Key (user_id_FK) references usuarios(id)                       
                   
                   
                   );
    CREATE TABLE mfa(
    id int primary key auto_increment,
    user_id_FK int not null,
    cod_mfa varchar(255) not null,
    cod_data_cricao DATETIME not null,
    Foreign Key (user_id_FK) references usuarios(id)                  
    );