const express = require('express');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const clienteRoutes = require('./routes/clienteRoutes');
const swaggerSpec = require('./swagger');

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use('/', clienteRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
    res.send('🚀 API rodando! Acesse a documentação em /api-docs');
});

app.listen(PORT, () => {
    console.log(`🔥 Servidor rodando na porta ${PORT}`);
});
