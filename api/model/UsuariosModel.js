import Connection from "../config/Connection.js";

class UsuariosModel {
    async findAll() {
        const connect = new Connection();
        const data = await connect.query("SELECT * FROM usuarios", {});
        return data;
    }

    async findOne(id) {
        const connect = new Connection();
        const data = await connect.query(
            "SELECT * FROM usuarios WHERE id = ?", 
            [id]
        );
        return data;
    }

    async create(data) {
        const connect = new Connection();
        const result = await connect.query(
            "INSERT INTO usuarios SET ?", 
            [data]
        );
        return result;
    }

    async update(data, id) {
        const connect = new Connection();
        const result = await connect.query(
            "UPDATE usuarios SET ? WHERE id = ?", 
            [data, id]
        );
        return result;
    }

    async delete(id) {
        const connect = new Connection();
        const data = await connect.query(
            "DELETE FROM usuarios WHERE id = ?", 
            [id]
        );
        return data;
    }
    
}


export default UsuariosModel;