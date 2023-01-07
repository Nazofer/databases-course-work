'use strict';

const { sql, executeSql } = require('../model/model');


const getQuiz = (req, res) => {
  executeSql(sql.readQuiz(req.params), res);
};

const getAllQuizes = (req, res) => {
  executeSql(sql.readAllQuizes(), res);
};

const createQuiz = (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const date = new Date();
  const isoDate = date.toISOString().slice(0, 19).replace('T', ' ');
  const uid = Math.floor(1000 + Math.random() * 9000);
  executeSql(sql.createQuiz(req.body.text, isoDate, uid), res);
};

const deleteQuiz = (req, res) => {
  executeSql(sql.deleteQuiz(req.params), res);
};

const updateQuiz = (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const date = new Date();
  const isoDate = date.toISOString().slice(0, 19).replace('T', ' ');
  const uid = Math.floor(1000 + Math.random() * 9000);
  executeSql(sql.updateQuiz(req.params.id, req.body.text, isoDate, uid), res);
};

const deleteAllQuizes = (req, res) => {
  executeSql(sql.deleteAllQuizes(), res)
}

module.exports = { getQuiz, getAllQuizes, createQuiz, deleteQuiz, updateQuiz, deleteAllQuizes };
