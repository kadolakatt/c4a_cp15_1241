const express = require('express');
const app = express();

//Middleware para procesar request.body de tipo JSON
app.use(express.json());

app.get('/prueba', (request, response) => {
    response.json({ mensaje: "hola mundo"});
});

//{ username: xxxxxxx, password: xxxxxxx }
app.post('/login', (request, response) => {
    const { username, password } = request.body;
    
    if (username==="admin" && password === "12345") {
        response.json({ usuario: "admin", timestamp: Date.now() });
        return;
    }

    response.sendStatus(400);

});

//{ a: 0, b: 0 }
app.post('/suma', (request, response) => {
    const { a , b } = request.body;
    if (!isNaN(a) && !isNaN(b)) {
        response.json({ resultado: parseFloat(a) + parseFloat(b)});
        return;
    }

    response.sendStatus(400)

});

module.exports = app;