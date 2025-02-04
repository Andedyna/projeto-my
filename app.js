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

    const precoFormatado = Number(preco).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    
    const agora = new Date();
    const data = agora.toLocaleDateString('pt-BR');
    const hora = agora.toLocaleTimeString('pt-BR', { hour12: false });

    const mensagem = `Produto: ${nome} | Preço: ${precoFormatado} | Consultado em: ${data} às ${hora}`;

    res.send(mensagem);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});