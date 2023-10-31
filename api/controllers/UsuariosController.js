import UsuariosModel from '../model/UsuariosModel.js'

class UsuariosController {
    async findAll(request, response) {
        const usuarioModel = new UsuariosModel();
        const result = await usuarioModel.findAll();
        return response.json(result);
    }

    async findOne(request, response) {
        const id = request.params.id;
        const usuarioModel = new UsuariosModel();
        const result = await usuarioModel.findOne(id);
        return response.json(result);
    }

    async create(request, response) {
        const data = request.body;
        const usuarioModel = new UsuariosModel();
        const result = await usuarioModel.create(data);
        return response.json(result);
    }

    async update(request, response) {
        const data = request.body;
        const id = request.params.id;
        const usuarioModel = new UsuariosModel();
        const result = await usuarioModel.update(data, id);
        return response.json(result);
    }

    async delete(request, response) {
        const id = request.params.id;
        const usuarioModel = new UsuariosModel();
        const result = await usuarioModel.delete(id);
        return response.json(result)
    }
}   

export default UsuariosController;