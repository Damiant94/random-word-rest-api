const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.render('../api/index.ejs');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;