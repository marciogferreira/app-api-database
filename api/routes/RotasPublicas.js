import express from "express";
import jwt from 'jsonwebtoken'
import Connection from "../config/Connection.js";
const RotasPublicas = express.Router();

RotasPublicas.post('/login', async function(request, response) {
    
    const login = request.body.login;
    const senha = request.body.senha;

    const conexao = new Connection();
    const resultado = await conexao.query("SELECT * FROM usuarios WHERE login = ? AND senha = ?", [login, senha]);            
    if(resultado.length > 0) {
        const data = {
            nome: resultado[0].nome,
            login: resultado[0].login,
        }
        const token = jwt.sign(data, '084P2K9U9GI96IOKV5TVDSADSD');
        response.json({
            token
        });
    }
});

export default RotasPublicas;