const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Clientes',
            version: '1.0.0',
            description: 'Documentação da API REST de clientes com Node.js, Express e SQLite'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local'
            },
            {
                url: 'https://api-clientes-node-sqlite.onrender.com',
                description: 'Servidor em produção'
            }
        ]
    },
    apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;