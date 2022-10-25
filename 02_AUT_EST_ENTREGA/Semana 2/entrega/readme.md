# Entrega Semana 2
### <a href="https://github.com/YagoDevs/modulo2/blob/main/02_AUT_EST_ENTREGA/Semana%202/entrega/bdlogico.png">Modelo lógico</a>
<img src="https://raw.githubusercontent.com/YagoDevs/modulo2/main/02_AUT_EST_ENTREGA/Semana%202/entrega/bdlogico.png"> </img>
### <a href="https://github.com/YagoDevs/modulo2/blob/main/02_AUT_EST_ENTREGA/Semana%202/entrega/modelofisico.txt">Modelo físico</a>

BEGIN TRANSACTION;<br />
CREATE TABLE IF NOT EXISTS "usuario" (
    "cod_usuario"	INTEGER NOT NULL UNIQUE,<br />
    "nome"	varchar(255),<br />
    "telefone"	varchar(14),<br />
    "email"	varchar(100),<br />
    PRIMARY KEY("cod_usuario" AUTOINCREMENT)<br />
);<br />

CREATE TABLE IF NOT EXISTS "habilidade" (
    "id"	integer NOT NULL unique,<br />
    "cod_usuario"	INTEGER NOT NULL,<br />
    "area"	integer(11) NOT NULL,<br />
    "descrição"	varchar(250) NOT NULL,<br />
    "nome"	varchar(128) NOT NULL,<br />
    FOREIGN KEY (cod_usuario) REFERENCES usuario(cod_usuario),<br />
    PRIMARY KEY("id" AUTOINCREMENT)<br />
);<br />

CREATE TABLE IF NOT EXISTS "experiencia" (
    "id"	integer NOT NULL unique,<br />
    "cod_usuario"	INTEGER NOT NULL,<br />
    "Nome da Empresa"	varchar(255) NOT NULL,<br />
    "Ano de Atuação"	date NOT NULL,<br />
    "Cargo"	varchar(30) NOT NULL,<br />
    FOREIGN KEY (cod_usuario) REFERENCES usuario(cod_usuario),<br />
    PRIMARY KEY("id" AUTOINCREMENT)<br />
);<br />

CREATE TABLE IF NOT EXISTS "endereco" (
    "id"	integer NOT NULL unique,<br />
    "cod_usuario"	integer NOT NULL,<br />
    "rua"	varchar(255) NOT NULL,<br />
    "numero"	varchar(7) NOT NULL,<br />
    "bairro"	varchar(30),<br />
    "cidade"	varchar(30) NOT NULL,<br />
    "estado"	varchar(30) NOT NULL,<br />
    FOREIGN KEY (cod_usuario) REFERENCES usuario(cod_usuario),<br />
    PRIMARY KEY("id" AUTOINCREMENT)<br />
);<br />

CREATE TABLE IF NOT EXISTS "formacao" (
    "id"	integer NOT NULL unique, <br />
    "cod_usuario"	integer NOT NULL,<br />
    "Curso"	varchar(30) NOT NULL,<br />
    "instituicao"	varchar(100) NOT NULL,<br />
    "data_inicio"	date NOT NULL,<br />
    "data_formacao"	date NOT NULL,<br />
    FOREIGN KEY (cod_usuario) REFERENCES usuario(cod_usuario),<br />
    PRIMARY KEY("id" AUTOINCREMENT)<br />
);<br />


INSERT INTO "usuario" VALUES (304445,'yago Phellipe Matos Lopes',31986255013,'yagophellipe@gmail.com');
