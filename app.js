const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/usuario/:id', (req, res) => {
    const { id } = req.params; // Captura o ID da URL
    res.send(`Usuário com ID: ${id}`);
});
 
app.get('/produto/:nome/:preco', (req, res) => {
    const { nome, preco } = req.params;
    res.send(`Produto: O ${nome} custa R$${preco}.`);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});