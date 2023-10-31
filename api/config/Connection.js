import mysql from 'mysql';
import { makeDb } from 'mysql-async-simple';

class Connection {
    constructor() {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'ads_sistema'
        });
        this.db = makeDb();
    }
    // DEVEMOS INSTALAR A BIBLIOTECA mysql-async-simple
    async query(sql, dados) {
        await this.db.connect(this.connection);
        try {
            const resposta = await this.db.query(this.connection, sql, dados);
            return resposta;
        } catch(e) {
            throw e;
        } finally {
            await this.db.close(this.connection);
        }
    }
}


export default Connection;

