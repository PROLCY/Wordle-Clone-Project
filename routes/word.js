const express = require('express');
const axios = require('axios');
const Word = require('../schemas/words');

const router = express.Router();

router.get('/correct', async (req, res) => {
    let random = Math.floor(Math.random() * await Word.count());
    const wordCorrect = await Word.findOne({}).skip(random);
    console.log(wordCorrect.word);
    res.send({
        wordCorrect: wordCorrect.word
    });
});

router.post('/exist', async (req, res) => {
    try {
        const response = await Word.find({ word: req.body.word });
        
        if ( !response.length )
            res.send({
                exist: false
            })
        else
            res.send({
                exist: true
            })
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;