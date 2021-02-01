const express = require('express');
const router = express.Router();
const Word = require('../models/word');
const cors = require('cors')
router.use(cors())

router.get('/', async (req, res) => {
    try {
        const word = await Word.aggregate([{$sample: {size: 1}}]);
        res.json(word[0].word)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

module.exports = router