const express = require('express'),
    server = express(),
    cors = require('cors'),
    mysql = require('mysql')

const database = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "fseletro_v3"
})

server.use(cors());
server.use(express.json());

server.get('/', (req,res) =>{
    res.end("<html>Hello Wold!</html>")
})

server.get('/produtos', (req,res) =>{
    const sql = "SELECT * FROM produtos JOIN categorias ON categorias.id_categoria = produtos.id_categoria";
    database.query(sql, (error, results) => {
        if(error){
            return error;
        }res.json(results)
    })
})
server.get('/mensagens', (req,res) =>{
    const sql = "SELECT * FROM comentarios";
    database.query(sql, (error, results) => {
        if(error){
            return error;
        }res.json(results)
    })
})
server.post('/mensagens', (req,res) =>{
    const {nome, msg } = req.body
    const sql = `INSERT INTO comentarios(nome, msg) VALUES ('${nome}', '${msg}')`;
    database.query(sql, (error, results) => {
        if(error){
            return error;
        } res.json(results);
    })
})

server.listen(5000,()=>{
    console.log("Server on!")
})