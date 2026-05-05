const express = require('express');
const app = express();

app.use(express.json());

const clienteRoutes = require('./routes/clienteRoutes');

app.use('/', clienteRoutes);

app.get('/', (req, res) => {
    res.send('🚀 API rodando!');
});

app.listen(3000, () => {
    console.log('🔥 Servidor rodando em http://localhost:3000');
});