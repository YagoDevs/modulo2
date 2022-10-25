# Atividade semana 3
### Obs: Coloquei o banco de dados tanto para abrir no dbBrowser, quando também ter o código em txt. Além disto, coloquei o app.js onde lá criei rotas para fazer com que consiga pesquisar o que foi solicitado.
### MODELO FISICO

BEGIN TRANSACTION;<br />
CREATE TABLE IF NOT EXISTS "usuario" (<br />
    "cod_usuario"	INTEGER NOT NULL UNIQUE,<br />
    "nome"	varchar(255),<br />
    "telefone"	varchar(14),<br />
    "email"	varchar(100),<br />
    PRIMARY KEY("cod_usuario" AUTOINCREMENT)<br />
);<br />

CREATE TABLE IF NOT EXISTS "habilidade" (<br />
    "id"	integer NOT NULL unique,<br />
    "cod_usuario"	INTEGER NOT NULL,<br />
    "area"	integer(11) NOT NULL,<br />
    "descrição"	varchar(250) NOT NULL,<br />
    "nome"	varchar(128) NOT NULL,<br />
    FOREIGN KEY (cod_usuario) REFERENCES usuario(cod_usuario),<br />
    PRIMARY KEY("id" AUTOINCREMENT)<br />
);<br />

CREATE TABLE IF NOT EXISTS "experiencia" (<br />
    "id"	integer NOT NULL unique,<br />
    "cod_usuario"	INTEGER NOT NULL,<br />
    "Nome_Empresa"	varchar(255) NOT NULL,<br />
    "Ano_Atuação"	date NOT NULL,<br />
    "Cargo"	varchar(30) NOT NULL,<br />
    FOREIGN KEY (cod_usuario) REFERENCES usuario(cod_usuario),<br />
    PRIMARY KEY("id" AUTOINCREMENT)<br />
);<br />

CREATE TABLE IF NOT EXISTS "endereco" (<br />
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

CREATE TABLE IF NOT EXISTS "formacao" (<br />
    "id"	integer NOT NULL unique, <br />
    "cod_usuario"	integer NOT NULL,<br />
    "Curso"	varchar(30) NOT NULL,<br />
    "instituicao"	varchar(100) NOT NULL,<br />
    "data_inicio"	date NOT NULL,<br />
    "data_formacao"	date NOT NULL,<br />
    FOREIGN KEY (cod_usuario) REFERENCES usuario(cod_usuario),<br />
    PRIMARY KEY("id" AUTOINCREMENT)<br />
);<br />


INSERT INTO "usuario" VALUES (304445,'yago Phellipe Matos Lopes',31986255013,'yagophellipe@gmail.com');<br />
INSERT INTO "formacao" VALUES (1, 304445,'Ciência da Computação','Inteli','01/08/2022','01/06/2026');<br />
INSERT INTO "endereco" VALUES (1, 304445,'Barão de Monte alto',"480",'Cardoso', 'Belo Horizonte', 'Minas Gerais');<br />
INSERT INTO "experiencia" VALUES (1, 304445,'Exercito Brasileiro','2021','Soldado');<br />
INSERT INTO "habilidade" VALUES (1, 304445,'Tecnologia', 'Atuando como backend','Backend');
