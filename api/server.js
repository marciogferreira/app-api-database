import express from 'express';
import cors from 'cors';
import RotasPrivadas from './routes/RotasPrivadas.js';
import RotasPublicas from './routes/RotasPublicas.js';

const app = express();
app.use(express.json());
app.use(cors());

// http://localhost:8000/
app.get('/', function(request, response) {
    return response.send("Página Home");
})

app.use(RotasPublicas);
app.use(RotasPrivadas);



app.listen(8000, function() {
    console.log("Servidor executando...");
});