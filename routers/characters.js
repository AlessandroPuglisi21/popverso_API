const express = require('express');
const router = express.Router();
const db = require('../db');  

// Ottieni tutti i personaggi
router.get('/', (req, res) => {
    db.query('SELECT * FROM personaggi', (err, results) => {
        if (err) {
            return res.status(500).send('Errore nella query');
        }
        res.json(results);
    });
});

// Ottieni un singolo personaggio
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM personaggi WHERE id_personaggio = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send('Errore nella query');
        }
        if (results.length === 0) {
            return res.status(404).send('Personaggio non trovato');
        }
        res.json(results[0]);
    });
});

module.exports = router;
