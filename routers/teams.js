const express = require('express');
const router = express.Router();
const db = require('../db');  

// Ottieni tutti i team
router.get('/', (req, res) => {
    db.query('SELECT * FROM squadre', (err, results) => {
        if (err) {
            return res.status(500).send('Errore nella query');
        }
        res.json(results);
    });
});

// Ottieni i componenti di un team
router.get('/:id/componenti', (req, res) => {
    const { id } = req.params;
    db.query(
        'SELECT p.nome FROM personaggi p JOIN personaggi_squadre ps ON p.id_personaggio = ps.id_personaggio WHERE ps.id_squadra = ?',
        [id],
        (err, results) => {
            if (err) {
                return res.status(500).send('Errore nella query');
            }
            if (results.length === 0) {
                return res.status(404).send('Team non trovato o senza componenti');
            }
            res.json(results);
        }
    );
});

module.exports = router;
