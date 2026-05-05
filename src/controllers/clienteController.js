const db = require('../database/database');

exports.listarClientes = (req, res) => {
    db.all("SELECT * FROM clientes", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(rows);
    });
};

exports.buscarCliente = (req, res) => {
    const id = req.params.id;

    db.get("SELECT * FROM clientes WHERE id = ?", [id], (err, row) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }

        if (!row) {
            return res.status(404).json({ mensagem: "Cliente não encontrado" });
        }

        res.json(row);
    });
};

exports.criarCliente = (req, res) => {
    const { nome, cidade } = req.body;

    if (!nome || !cidade) {
        return res.status(400).json({
            mensagem: "Nome e cidade são obrigatórios"
        });
    }

    db.run(
        "INSERT INTO clientes (nome, cidade) VALUES (?, ?)",
        [nome, cidade],
        function (err) {
            if (err) {
                return res.status(500).json({ erro: err.message });
            }

            res.status(201).json({
                id: this.lastID,
                nome,
                cidade
            });
        }
    );
};

exports.atualizarCliente = (req, res) => {
    const id = req.params.id;
    const { nome, cidade } = req.body;

    if (!nome || !cidade) {
        return res.status(400).json({
            mensagem: "Nome e cidade são obrigatórios"
        });
    }
    
    db.run(
        "UPDATE clientes SET nome = ?, cidade = ? WHERE id = ?",
        [nome, cidade, id],
        function (err) {
            if (err) {
                return res.status(500).json({ erro: err.message });
            }

            if (this.changes === 0) {
                return res.status(404).json({ mensagem: "Cliente não encontrado" });
            }

            res.json({ id, nome, cidade });
        }
    );
};

exports.deletarCliente = (req, res) => {
    const id = req.params.id;

    db.run(
        "DELETE FROM clientes WHERE id = ?",
        [id],
        function (err) {
            if (err) {
                return res.status(500).json({ erro: err.message });
            }

            if (this.changes === 0) {
                return res.status(404).json({ mensagem: "Cliente não encontrado" });
            }

            res.json({ mensagem: "Cliente removido com sucesso" });
        }
    );
};
