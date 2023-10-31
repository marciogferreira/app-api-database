import express from "express";
import UsuariosController from "../controllers/UsuariosController.js";

const usuariosRotas = express.Router();
const usuariosController = new UsuariosController();

// GET - localhost:8000/usuarios
usuariosRotas.get('/usuarios', usuariosController.findAll);
// GET - localhost:8000/usuarios/2
usuariosRotas.get('/usuarios/:id', usuariosController.findOne);
// POST - localhost:8000/usuarios
usuariosRotas.post('/usuarios', usuariosController.create);
// PUT - localhost:8000/usuarios/2
usuariosRotas.put('/usuarios/:id', usuariosController.update);
// DELETE - localhost:8000/usuarios/2
usuariosRotas.delete('/usuarios/:id', usuariosController.delete);


export default usuariosRotas;