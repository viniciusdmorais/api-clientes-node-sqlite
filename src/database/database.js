const Database = require('better-sqlite3');

const db = new Database('database.db');

db.prepare(`
    CREATE TABLE IF NOT EXISTS clientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        cidade TEXT NOT NULL
    )
`).run();

module.exports = db;
