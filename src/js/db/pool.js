'use strict';

const mysql = require('mysql2');

const Pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nazar11224",
  database: "surveydb"
});

module.exports = { Pool };