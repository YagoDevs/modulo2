const { Router } = require('express');
const express = require('express'); 
const { get } = require('http');
const { dirname } = require('path');
const app = express();
//const { app } = require('express');
//const app = express.app();
const hostname = '127.0.0.1';
const port = 3021;
const sqlite3 = require('sqlite3').verbose();  

const DBPATH = 'bdcurriculo.db';

app.use(express.static(__dirname+"/index.html"))

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

app.use(express.json());

app.get('/usuario', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco

    var sql = 'SELECT cod_usuario, nome, telefone, email FROM usuario ORDER BY cod_usuario DESC'; 


    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});


app.post('/adicionar/usuario', function(req,res){
    console.log(req.body);
    //Puxa todos os valores para as variaveis em seguida, tendo que colocalas no nome no html
    const{nome, telefone, email} = req.body;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    //inserindo na tabela formacao em curso, data de inicio e data de formação os valores respectivamente curso, data inicio e data formação que foram colocados lá no html
    var sql = `INSERT INTO usuario (nome, telefone, email) values ('${nome}', '${telefone}', '${email}')`;
    db.all(sql, [],(err, rows)=>{
        if(err){
            res.json(err.message);
        }
        res.send("<p>usuario adicionado com sucesso</p>") 
    });
    db.close(); 
});

app.get('/atualizar/usuario', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco

    var sql = 'SELECT cod_usuario, nome, telefone, email FROM usuario ORDER BY cod_usuario DESC'; 


    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.post('/atualizar/usuario', function(req,res){
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    const{nome, telefone, email, cod_usuario} = req.body;
    // Abaixo, atualizará somente o curso, porém se tirasse o where, atualizaria TODOS OS CURSOS DOS USUARIOS'

    var sql = `UPDATE usuario set`;
    if(nome!=''){
        sql += ` nome='${nome}'`;
    };
    if(telefone!=''){
        sql += `, telefone='${telefone}'`;
    };
    if(email!=''){
        sql += `, email='${email}'`;
    };

    sql+= ` WHERE cod_usuario='${cod_usuario}'`
    //substitui uma coisa por outra
    console.log(sql)
    db.all(sql, [],(err, rows)=>{
        if(err){
            res.json(err.message);
        }
        res.send("<p>usuario atualizado com sucesso</p>") 
    });
    db.close();

});


app.delete('/deletar/usuario', function(req,res){
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    const{cod_usuario} = req.body;
    var sql = `DELETE FROM usuario WHERE cod_usuario='${cod_usuario}'`;
    db.all(sql, [],(err, rows)=>{
        if(err){
            res.json(err.message); 
        }
        res.send("<p>usuario deletado com sucesso</p>") 
    });
    db.close(); 

});

app.listen(port, ()=> console.log("Servidor Rodando "+hostname+":"+port));