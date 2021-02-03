const express = require('express');
const cors = require('cors');
const router = express.Router();
router.use(cors());

const Word = require('../models/word');

router.get('/word', async (req, res) => {
    try {
        if (req.query.startsWith) {
            const words = await Word.find({
                word: new RegExp('^' + req.query.startsWith, 'i')
            });
            if (words.length > 0) {
                const randomIndex = Math.floor(Math.random() * words.length);
                const word = words[randomIndex];
                res.json([word.word]);
            }
            else res.json([]);
        } else {
            const wordObject = await Word.aggregate([{ 
                $sample: { size: 1 } 
            }]);
            res.json([wordObject[0].word]);
        }

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/words', async (req, res) => {
    try {
        if (req.query.number <= 1000) {
            const words = await Word.aggregate([{
                $sample: { size: parseInt(req.query.number) }
            }]);
            const wordsMapped = words.map((wordObject) => {
                return wordObject.word;
            });
            res.json(wordsMapped);
        } else if (!req.query.number){
            res.json({ message: "query number not given" });
        } else {
            res.json({ message: "query number too high" });
        }

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;