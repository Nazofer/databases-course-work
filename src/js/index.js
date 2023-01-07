'use strict';

const express = require('express');
const { Pool } = require('./db/pool.js');
const { getQuiz, getAllQuizes, createQuiz, deleteQuiz, updateQuiz, deleteAllQuizes} = require('./controller/controllers.js');

const router = express();
const jsonParse = express.json();

router.get('/quiz/:id', getQuiz);
router.get('/quizes/', getAllQuizes);
router.post('/quiz/', jsonParse, createQuiz);
router.put('/quiz/:id', jsonParse, updateQuiz);
router.delete('/quiz/:id', deleteQuiz);
router.delete('/quizes/', deleteAllQuizes);

router.listen(3000);