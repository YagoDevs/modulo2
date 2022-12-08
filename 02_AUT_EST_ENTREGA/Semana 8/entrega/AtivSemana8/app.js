const { urlencoded } = require('express');
const express = require('express'); 
const app = express();

const path= require('path');
const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = './bdcurriculo.db'; //use o nome que você achar melhor para o banco de dados
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.json());
app.use(express.static(__dirname));
app.use('/', express.static(path.join(__dirname, "/")))


app.get('/', (req, res) =>{
    res.sendFile('index.html', {root: '.'})
})
app.use(express.json());
app.get('/formacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT curso, data_inicio, data_formacao, descricao FROM formacao ORDER BY data_formacao DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.get('/projetos', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT id, cod_usuario, data_inicio, data_fim,descrição, nome FROM projetos ORDER BY cod_usuario DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});



app.get('/usuario', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT cod_usuario, nome, curso, telefone, email, endereco FROM usuario ORDER BY cod_usuario DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});
app.post('/addUsuario', urlencodedParser, (req,res)=>{
    console.log(req.body);
    //Puxa todos os valores para as variaveis em seguida, tendo que colocalas no nome no html
    const{nome, curso, endereco, email, telefone} = req.body;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    //inserindo na tabela formacao em curso, data de inicio e data de formação os valores respectivamente curso, data inicio e data formação que foram colocados lá no html
    var sql = `INSERT INTO usuario ( nome, curso, endereco,telefone, email) values ('${nome}', '${curso}', '${endereco}', '${telefone}', '${email}')`;
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.send();
    });
    console.log(sql)
    db.close(); 
});

app.post('/atualizarUsuario', urlencodedParser, (req,res)=>{
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    const{ cod_usuario, nome, curso, endereco, email, telefone} = req.body;
    // Abaixo, atualizará somente o usuario, porém se tirasse o where, atualizaria TODOS OS CURSOS DOS USUARIOS'

    var sql = `UPDATE usuario set`;
    if(nome!=''){
        sql += ` nome='${nome}'`;
    };
    if(curso!=''){
        sql += `, curso='${curso}'`;
    };
    if(endereco!=''){
        sql += `, endereco='${endereco}'`;
    };
    if(email!=''){
        sql += `, email='${email}'`;
    };
    if(telefone!=''){
        sql += `, telefone='${telefone}'`;
    };
    sql+= ` WHERE cod_usuario='${cod_usuario}'`
    //substitui uma coisa por outra
    console.log(sql)
    db.run(sql, [],(err, rows)=>{
        if(err){
            //criar um alerta e travar a aplicação
            res.json(err.message);
        }
        res.json(rows)
    });
    db.close(); 

});

app.get('/atualizarUsuario', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT cod_usuario, nome, curso, telefone, email, endereco FROM usuario ORDER BY cod_usuario DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.post('/deleteUsuario', urlencodedParser, (req,res)=>{
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    const{cod_usuario} = req.body;
    var sql = `DELETE FROM usuario WHERE cod_usuario='${cod_usuario}'`;
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.send();
    });
    db.close(); 

});
app.get('/experiencia', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT id, Nome_Empresa, Cargo, descricao,Ano_Atuação FROM experiencia ORDER BY cod_usuario DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.post('/addExperiencia', urlencodedParser, (req,res)=>{
    console.log(req.body);
    //Puxa todos os valores para as variaveis em seguida, tendo que colocalas no nome no html
    const{cod_usuario, Nome_Empresa, Ano_Atuação, Cargo, descricao} = req.body;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    //inserindo na tabela formacao em curso, data de inicio e data de formação os valores respectivamente curso, data inicio e data formação que foram colocados lá no html
    var sql = `INSERT INTO experiencia ( cod_usuario, Nome_Empresa, Ano_Atuação, Cargo, descricao) values ('${cod_usuario}','${Nome_Empresa}', '${Ano_Atuação}', '${Cargo}', '${descricao}')`;
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.send();
    });
    console.log(sql)
    db.close(); 
});

app.post('/atualizarExperiencia', urlencodedParser, (req,res)=>{
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    const{cod_usuario, id, Nome_Empresa, Ano_Atuação, Cargo, descricao} = req.body;
    // Abaixo, atualizará somente o usuario, porém se tirasse o where, atualizaria TODOS OS CURSOS DOS USUARIOS'

    var sql = `UPDATE experiencia set`;
    if(Nome_Empresa!=''){
        sql += ` Nome_Empresa='${Nome_Empresa}'`;
    };
    if(Ano_Atuação!=''){
        sql += `, Ano_Atuação='${Ano_Atuação}'`;
    };
    if(Cargo!=''){
        sql += `, Cargo='${Cargo}'`;
    };
    if(descricao!=''){
        sql += `, descricao='${descricao}'`;
    };
    sql+= ` WHERE cod_usuario='${cod_usuario}' AND id='${id}'`
    //substitui uma coisa por outra
    console.log(sql)
    db.run(sql, [],(err, rows)=>{
        if(err){
            //criar um alerta e travar a aplicação
            res.json(err.message);
        }
        res.json(rows)
    });
    db.close(); 

});

app.get('/atualizarExperiencia', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT id, Nome_Empresa, Cargo, descricao,Ano_Atuação FROM experiencia ORDER BY cod_usuario DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});



app.post('/deleteExperiencia', urlencodedParser, (req,res)=>{
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    const{cod_usuario, id} = req.body;
    var sql = `DELETE FROM experiencia WHERE cod_usuario='${cod_usuario}' AND id='${id}'`;
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.send();
    });
    db.close(); 

});


app.listen(port,()=> console.log("Api Rodando no server: "+hostname));