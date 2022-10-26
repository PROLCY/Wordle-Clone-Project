const express = require('express');
const axios = require('axios');

const router = express.Router();

const wordCorrect = "GREAT";

router.get('/correct', (req, res) => {
    res.send({
        wordCorrect: wordCorrect
    });
});

router.post('/isExist', async (req, res) => {
    try {
        const word = req.body.word;
        await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        res.send({
            isExist: true
        });
    } catch (error) {
        res.send({
            isExist: false
        });
    }
})

module.exports = router;