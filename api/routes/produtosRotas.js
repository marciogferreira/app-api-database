import express from "express";
import Connection from "../config/Connection.js";

const produtosRotas = express.Router();

// GET - localhost:8000/produtos
produtosRotas.get('/produtos', function(request, response) {
    const connection = new Connection();
    const sql = "SELECT * FROM produtos";
    connection.query(sql, {}, function(error, resultados) {
        response.json(resultados);
    });
});

// GET - localhost:8000/produtos/2
produtosRotas.get('/produtos/:id', function(request, response) {
    const id = request.params.id
    const connection = new Connection();
    const sql = "SELECT * FROM produtos WHERE id = " + id;
    connection.query(sql, {}, function(error, resultados) {
        response.json(resultados);
    });
});

// POST - localhost:8000/produtos
produtosRotas.post('/produtos', function(request, response) {
    const dados = request.body;
    // VALIDACAO DOS DADOS
    let errorvalidacao = [];
    if(dados.nome === '') {
        errorvalidacao.push("Nome obrigatório");
    }
    if(dados.login === '') {
        errorvalidacao.push("Login obrigatório");
    }

    if(errorvalidacao.length > 0) {
        return response.json(errorvalidacao);
    }

    const connection = new Connection();
    const sql = "INSERT INTO produtos SET ?";
    connection.query(sql, dados, function(error, resultados) {
        response.json(resultados);
    });
});

// PUT - localhost:8000/produtos/2
produtosRotas.put('/produtos/:id', function(request, response) {
    const id = request.params.id;
    const dados = request.body;

    const connection = new Connection();
    const sql = "UPDATE produtos SET ? WHERE id = ?";
    connection.query(sql, [dados, id], function(error, resultados) {
        response.json(resultados);
    });
});


// DLETE - localhost:8000/produtos/2
produtosRotas.delete('/produtos/:id', function(request, response) {
    const id = request.params.id
    const connection = new Connection();
    const sql = "DELETE FROM produtos WHERE id = ?";
    connection.query(sql, [id], function(error, resultados) {
        response.json(resultados);
    });
});


export default produtosRotas;