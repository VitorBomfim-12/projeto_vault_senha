Create database Vault_76;              
     use Vault_76;
                   
    
    CREATE TABLE usuarios(
    id int primary key auto_increment,
    nome varchar(50) not null,
    senha_hash varchar(100) not null,
    dica varchar(30),
    email varchar(100) not null
                   
    );
    CREATE TABLE senha(
    id_senha int primary key auto_increment,
    senha_hash varchar(100) not null,
    url varchar(250),
    descricao varchar(100),
    site varchar(100),
    user_id_FK int,
    Foreign Key (user_id) references usuarios(id)                       
                   
                   
                   );
    CREATE TABLE mfa(
    id int primary key auto_increment,
    user_id_FK int,
    cod_mfa varchar(255),
    cod_data_cricao DATATIME not null               
    );