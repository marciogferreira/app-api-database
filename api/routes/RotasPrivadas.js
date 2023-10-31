import express from "express";
import jwt from 'jsonwebtoken';
import produtosRotas from "./produtosRotas.js";
import usuariosRotas from "./usuariosRotas.js";

const RotasPrivadas = express.Router();

// MIDDLEWARE - FILTRO DE REQUISICOES
RotasPrivadas.use((request, response, next) => {
    const token = request.headers.authorization;
    if(token == undefined) {
        return response.status(403).send("Não autorizado");
    }
    
    jwt.verify(token, '084P2K9U9GI96IOKV5TVDSADSD', function(err, dataToken) {
        if(err) {
            return response.status(403).send("Token inválido");
        }
    });
    next();
});

RotasPrivadas.use(usuariosRotas);
RotasPrivadas.use(produtosRotas);

export default RotasPrivadas;