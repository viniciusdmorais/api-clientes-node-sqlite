const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');

router.get('/clientes', clienteController.listarClientes);
router.get('/clientes/:id', clienteController.buscarCliente);
router.post('/clientes', clienteController.criarCliente);
router.put('/clientes/:id', clienteController.atualizarCliente);
router.delete('/clientes/:id', clienteController.deletarCliente);

module.exports = router;
