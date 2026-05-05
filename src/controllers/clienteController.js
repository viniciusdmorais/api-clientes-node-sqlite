const db = require('../database/database');

exports.listarClientes = (req, res) => {
    try {
        const clientes = db.prepare("SELECT * FROM clientes").all();
        res.json(clientes);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.buscarCliente = (req, res) => {
    try {
        const id = req.params.id;

        const cliente = db
            .prepare("SELECT * FROM clientes WHERE id = ?")
            .get(id);

        if (!cliente) {
            return res.status(404).json({ mensagem: "Cliente não encontrado" });
        }

        res.json(cliente);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.criarCliente = (req, res) => {
    try {
        const { nome, cidade } = req.body;

        if (!nome || !cidade) {
            return res.status(400).json({
                mensagem: "Nome e cidade são obrigatórios"
            });
        }

        const result = db
            .prepare("INSERT INTO clientes (nome, cidade) VALUES (?, ?)")
            .run(nome, cidade);

        res.status(201).json({
            id: result.lastInsertRowid,
            nome,
            cidade
        });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.atualizarCliente = (req, res) => {
    try {
        const id = req.params.id;
        const { nome, cidade } = req.body;

        if (!nome || !cidade) {
            return res.status(400).json({
                mensagem: "Nome e cidade são obrigatórios"
            });
        }

        const result = db
            .prepare("UPDATE clientes SET nome = ?, cidade = ? WHERE id = ?")
            .run(nome, cidade, id);

        if (result.changes === 0) {
            return res.status(404).json({ mensagem: "Cliente não encontrado" });
        }

        res.json({
            id: Number(id),
            nome,
            cidade
        });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.deletarCliente = (req, res) => {
    try {
        const id = req.params.id;

        const result = db
            .prepare("DELETE FROM clientes WHERE id = ?")
            .run(id);

        if (result.changes === 0) {
            return res.status(404).json({ mensagem: "Cliente não encontrado" });
        }

        res.json({ mensagem: "Cliente removido com sucesso" });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};
