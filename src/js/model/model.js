'use strict';

const { Pool } = require('../db/pool');

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

module.exports = { sql, executeSql };