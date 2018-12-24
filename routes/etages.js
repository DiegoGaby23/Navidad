const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.json({ etages: [] });
    });

router.route('/')
    .post((req, res) => {

    });

module.exports = router;