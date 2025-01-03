const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Alessandro9=',
    database: 'popverso_db',
});

db.connect((err) => {
    if (err) {
        console.error('Errore di connessione al database:', err.stack);
        return;
    }
    console.log('Connesso al database');
});

module.exports = db;
