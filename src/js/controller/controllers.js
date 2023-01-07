'use strict';

const { Pool } = require('../db/pool.js');

const sql = {
  createQuiz: (text, date, uid ) => {
    return `INSERT INTO surveydb.quizes (id, text, date, user_id) VALUES (${null}, \"${text}\", \"${date}\", ${uid})`;
  },
  readQuiz: ({ id }) => `SELECT * FROM surveydb.quizes WHERE id = ${id}`,
  readAllQuizes: () => `SELECT * FROM surveydb.quizes`,
  updateQuiz: ( id, text, date, uid ) => {
    return `UPDATE surveydb.quizes SET text = \"${text}\", date = \"${date}\", user_id = ${uid} WHERE id = ${id}`;
  },
  deleteQuiz: ({ id }) => `DELETE FROM surveydb.quizes WHERE id = ${id}`,
  deleteAllQuizes: () => `DELETE FROM surveydb.quizes`,
};

const executeSql = (sql, res) => {
  Pool.query(sql, (error, result) => {
    if (error) return res.status(500).json(error);
    result ? res.send(result) : res.sendStatus(404);
  });
};

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
