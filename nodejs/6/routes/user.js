const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, user');
});

router.get('/:id', (req, res) => {
    console.log(req.params, req.query);
    res.send(`Hello, user${req.params.id}`);
});

module.exports = router;