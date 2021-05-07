const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.use(express.static(__dirname + '/dist/sgc-app'));

app.get('/*', (req,res)=> res.sendFile(__dirname + '/dist/scg-app/index.html'));

app.listen(PORT, ()=> console.log(`Servidor executando na porta ${PORT}`));
