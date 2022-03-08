const http = require("http");
const express = require("express");
const app = express();

// codificar request 

app.get('/', (req, res) => {
    res.send("Iniciamos Servidor");
    res.send("Probando GIT HUB");
})

const puerto = 3000;

app.listen(puerto, () => {
    console.log("Escuchando");
})