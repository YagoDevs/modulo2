MODELO LÓGICO!
https://github.com/YagoDevs/modulo2/blob/main/02_AUT_EST_ENTREGA/Semana%202/entrega/bdlogico.png



MODELO FISICO

BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "usuario" (
    "cod_usuario"	INTEGER NOT NULL UNIQUE,
    "nome"	varchar(255),
    "telefone"	varchar(14),
    "email"	varchar(100),
    PRIMARY KEY("cod_usuario" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "habilidade" (
    "id"	integer NOT NULL unique,
    "cod_usuario"	INTEGER NOT NULL,
    "area"	integer(11) NOT NULL,
    "descrição"	varchar(250) NOT NULL,
    "nome"	varchar(128) NOT NULL,
    FOREIGN KEY (cod_usuario) REFERENCES usuario(cod_usuario),
    PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE IF NOT EXISTS "experiencia" (
    "id"	integer NOT NULL unique,
    "cod_usuario"	INTEGER NOT NULL,
    "Nome da Empresa"	varchar(255) NOT NULL,
    "Ano de Atuação"	date NOT NULL,
    "Cargo"	varchar(30) NOT NULL,
    FOREIGN KEY (cod_usuario) REFERENCES usuario(cod_usuario),
    PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE IF NOT EXISTS "endereco" (
    "id"	integer NOT NULL unique,
    "cod_usuario"	integer NOT NULL,
    "rua"	varchar(255) NOT NULL,
    "numero"	varchar(7) NOT NULL,
    "bairro"	varchar(30),
    "cidade"	varchar(30) NOT NULL,
    "estado"	varchar(30) NOT NULL,
    FOREIGN KEY (cod_usuario) REFERENCES usuario(cod_usuario),
    PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE IF NOT EXISTS "formacao" (
    "id"	integer NOT NULL unique,
    "cod_usuario"	integer NOT NULL,
    "Curso"	varchar(30) NOT NULL,
    "instituicao"	varchar(100) NOT NULL,
    "data_inicio"	date NOT NULL,
    "data_formacao"	date NOT NULL,
    FOREIGN KEY (cod_usuario) REFERENCES usuario(cod_usuario),
    PRIMARY KEY("id" AUTOINCREMENT)
);


INSERT INTO "usuario" VALUES (304445,'yago Phellipe Matos Lopes',31986255013,'yagophellipe@gmail.com');

CREATE TABLE IF NOT EXISTS "experiencia" (
    "id"	integer NOT NULL,
    "Nome da Empresa"	varchar(255) NOT NULL,
    "Ano de Atuação"	date NOT NULL,
    "Cargo"	varchar(30) NOT NULL,
    FOREIGN KEY (cod_usuario) REFERENCES usuario(cod_usuario),
    PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE IF NOT EXISTS "endereco" (
    "id"	integer NOT NULL,
    "rua"	varchar(255) NOT NULL,
    "numero"	varchar(7) NOT NULL,
    "bairro"	varchar(30),
    "cidade"	varchar(30) NOT NULL,
    "estado"	varchar(30) NOT NULL,
    FOREIGN KEY (cod_usuario) REFERENCES usuario(cod_usuario),
    PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE IF NOT EXISTS "formacao" (
    "id"	integer NOT NULL,
    "Curso"	varchar(30) NOT NULL,
    "instituicao"	varchar(100) NOT NULL,
    "data_inicio"	date NOT NULL,
    "data_formacao"	date NOT NULL,
    FOREIGN KEY (cod_usuario) REFERENCES usuario(cod_usuario),
    PRIMARY KEY("id" AUTOINCREMENT)
);


INSERT INTO "usuario" VALUES (304435,'yago Phellipe Matos Lopes',31986255013,'yagophellipe@gmail.com');
