(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{644:function(e,s,n){"use strict";n.r(s);var E=n(34),t=Object(E.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"реалізація-інформаціиного-та-програмного-забезпечення"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#реалізація-інформаціиного-та-програмного-забезпечення"}},[e._v("#")]),e._v(" Реалізація інформаційного та програмного забезпечення")]),e._v(" "),n("p",[e._v("В рамках проекту розробляється:")]),e._v(" "),n("h2",{attrs:{id:"sql-скрипт-для-створення-на-початкового-наповнення-бази-даних"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sql-скрипт-для-створення-на-початкового-наповнення-бази-даних"}},[e._v("#")]),e._v(" SQL-скрипт для створення на початкового наповнення бази даних")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("-- MySQL Workbench Forward Engineering\n\nSET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;\nSET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;\nSET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';\n\n-- -----------------------------------------------------\n-- Schema survey-db\n-- -----------------------------------------------------\nDROP SCHEMA IF EXISTS `survey-db` ;\n\n-- -----------------------------------------------------\n-- Schema survey-db\n-- -----------------------------------------------------\nCREATE SCHEMA IF NOT EXISTS `survey-db` DEFAULT CHARACTER SET utf8 ;\nUSE `survey-db` ;\n\n-- -----------------------------------------------------\n-- Table `survey-db`.`users`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `survey-db`.`users` ;\n\nCREATE TABLE IF NOT EXISTS `survey-db`.`users` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `username` VARCHAR(45) NOT NULL,\n  `email` VARCHAR(45) NOT NULL,\n  `password` VARCHAR(45) NOT NULL,\n  PRIMARY KEY (`id`))\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `survey-db`.`experts`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `survey-db`.`experts` ;\n\nCREATE TABLE IF NOT EXISTS `survey-db`.`experts` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `username` VARCHAR(45) NOT NULL,\n  `email` VARCHAR(45) NOT NULL,\n  `password` VARCHAR(45) NOT NULL,\n  `job` VARCHAR(45) NOT NULL,\n  `users_id` INT NOT NULL,\n  PRIMARY KEY (`id`),\n  INDEX `fk_experts_users_idx` (`users_id` ASC) VISIBLE,\n  CONSTRAINT `fk_experts_users`\n    FOREIGN KEY (`users_id`)\n    REFERENCES `survey-db`.`users` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `survey-db`.`quizes`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `survey-db`.`quizes` ;\n\nCREATE TABLE IF NOT EXISTS `survey-db`.`quizes` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `text` VARCHAR(45) NULL,\n  `expiration_date` DATETIME NOT NULL,\n  `users_id` INT NOT NULL,\n  PRIMARY KEY (`id`),\n  INDEX `fk_quiz_users1_idx` (`users_id` ASC) VISIBLE,\n  CONSTRAINT `fk_quiz_users1`\n    FOREIGN KEY (`users_id`)\n    REFERENCES `survey-db`.`users` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `survey-db`.`questions`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `survey-db`.`questions` ;\n\nCREATE TABLE IF NOT EXISTS `survey-db`.`questions` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `text` VARCHAR(45) NOT NULL,\n  `type` INT NOT NULL,\n  `quiz_id` INT NOT NULL,\n  PRIMARY KEY (`id`),\n  INDEX `fk_questions_quiz1_idx` (`quiz_id` ASC) VISIBLE,\n  CONSTRAINT `fk_questions_quiz1`\n    FOREIGN KEY (`quiz_id`)\n    REFERENCES `survey-db`.`quizes` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `survey-db`.`options`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `survey-db`.`options` ;\n\nCREATE TABLE IF NOT EXISTS `survey-db`.`options` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `text` VARCHAR(45) NOT NULL,\n  `questions_id` INT NOT NULL,\n  `isCorrect` TINYINT NULL,\n  PRIMARY KEY (`id`),\n  INDEX `fk_answers_questions1_idx` (`questions_id` ASC) VISIBLE,\n  CONSTRAINT `fk_answers_questions1`\n    FOREIGN KEY (`questions_id`)\n    REFERENCES `survey-db`.`questions` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `survey-db`.` options`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `survey-db`.` options` ;\n\nCREATE TABLE IF NOT EXISTS `survey-db`.` options` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `text` VARCHAR(45) NOT NULL,\n  PRIMARY KEY (`id`))\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `survey-db`.`selected_options`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `survey-db`.`selected_options` ;\n\nCREATE TABLE IF NOT EXISTS `survey-db`.`selected_options` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  ` options_id` INT NOT NULL,\n  PRIMARY KEY (`id`),\n  INDEX `fk_selected_options_ options1_idx` (` options_id` ASC) VISIBLE,\n  CONSTRAINT `fk_selected_options_ options1`\n    FOREIGN KEY (` options_id`)\n    REFERENCES `survey-db`.` options` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `survey-db`.`users_has_quiz`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `survey-db`.`users_has_quiz` ;\n\nCREATE TABLE IF NOT EXISTS `survey-db`.`users_has_quiz` (\n  `users_id` INT NOT NULL,\n  `quiz_id` INT NOT NULL,\n  PRIMARY KEY (`users_id`, `quiz_id`),\n  INDEX `fk_users_has_quiz_quiz1_idx` (`quiz_id` ASC) VISIBLE,\n  INDEX `fk_users_has_quiz_users1_idx` (`users_id` ASC) VISIBLE,\n  CONSTRAINT `fk_users_has_quiz_users1`\n    FOREIGN KEY (`users_id`)\n    REFERENCES `survey-db`.`users` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_users_has_quiz_quiz1`\n    FOREIGN KEY (`quiz_id`)\n    REFERENCES `survey-db`.`quizes` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `survey-db`.`users_has_quiz1`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `survey-db`.`users_has_quiz1` ;\n\nCREATE TABLE IF NOT EXISTS `survey-db`.`users_has_quiz1` (\n  `users_id` INT NOT NULL,\n  `quiz_id` INT NOT NULL,\n  PRIMARY KEY (`users_id`, `quiz_id`),\n  INDEX `fk_users_has_quiz1_quiz1_idx` (`quiz_id` ASC) VISIBLE,\n  INDEX `fk_users_has_quiz1_users1_idx` (`users_id` ASC) VISIBLE,\n  CONSTRAINT `fk_users_has_quiz1_users1`\n    FOREIGN KEY (`users_id`)\n    REFERENCES `survey-db`.`users` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_users_has_quiz1_quiz1`\n    FOREIGN KEY (`quiz_id`)\n    REFERENCES `survey-db`.`quizes` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `survey-db`.`quiz_states`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `survey-db`.`quiz_states` ;\n\nCREATE TABLE IF NOT EXISTS `survey-db`.`quiz_states` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `state_name` VARCHAR(45) NOT NULL,\n  PRIMARY KEY (`id`))\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `survey-db`.`quiz_actions`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `survey-db`.`quiz_actions` ;\n\nCREATE TABLE IF NOT EXISTS `survey-db`.`quiz_actions` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `at` DATETIME NOT NULL,\n  `quizes_id` INT NOT NULL,\n  `quiz_states_id` INT NOT NULL,\n  PRIMARY KEY (`id`),\n  INDEX `fk_quiz_states_quizes1_idx` (`quizes_id` ASC) VISIBLE,\n  INDEX `fk_quiz_actions_quiz_states1_idx` (`quiz_states_id` ASC) VISIBLE,\n  CONSTRAINT `fk_quiz_states_quizes1`\n    FOREIGN KEY (`quizes_id`)\n    REFERENCES `survey-db`.`quizes` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_quiz_actions_quiz_states1`\n    FOREIGN KEY (`quiz_states_id`)\n    REFERENCES `survey-db`.`quiz_states` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `survey-db`.`results`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `survey-db`.`results` ;\n\nCREATE TABLE IF NOT EXISTS `survey-db`.`results` (\n  `id` INT NOT NULL,\n  `options_id` INT NOT NULL,\n  `experts_id` INT NOT NULL,\n  PRIMARY KEY (`id`),\n  INDEX `fk_results_answers1_idx` (`options_id` ASC) VISIBLE,\n  INDEX `fk_results_experts1_idx` (`experts_id` ASC) VISIBLE,\n  CONSTRAINT `fk_results_answers1`\n    FOREIGN KEY (`options_id`)\n    REFERENCES `survey-db`.`options` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_results_experts1`\n    FOREIGN KEY (`experts_id`)\n    REFERENCES `survey-db`.`experts` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `survey-db`.`experts_has_results`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `survey-db`.`experts_has_results` ;\n\nCREATE TABLE IF NOT EXISTS `survey-db`.`experts_has_results` (\n  `experts_id` INT NOT NULL,\n  `results_id` INT NOT NULL,\n  PRIMARY KEY (`experts_id`, `results_id`),\n  INDEX `fk_experts_has_results_results1_idx` (`results_id` ASC) VISIBLE,\n  INDEX `fk_experts_has_results_experts1_idx` (`experts_id` ASC) VISIBLE,\n  CONSTRAINT `fk_experts_has_results_experts1`\n    FOREIGN KEY (`experts_id`)\n    REFERENCES `survey-db`.`experts` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_experts_has_results_results1`\n    FOREIGN KEY (`results_id`)\n    REFERENCES `survey-db`.`results` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `survey-db`.`results_has_experts`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `survey-db`.`results_has_experts` ;\n\nCREATE TABLE IF NOT EXISTS `survey-db`.`results_has_experts` (\n  `results_id` INT NOT NULL,\n  `experts_id` INT NOT NULL,\n  PRIMARY KEY (`results_id`, `experts_id`),\n  INDEX `fk_results_has_experts_experts1_idx` (`experts_id` ASC) VISIBLE,\n  INDEX `fk_results_has_experts_results1_idx` (`results_id` ASC) VISIBLE,\n  CONSTRAINT `fk_results_has_experts_results1`\n    FOREIGN KEY (`results_id`)\n    REFERENCES `survey-db`.`results` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_results_has_experts_experts1`\n    FOREIGN KEY (`experts_id`)\n    REFERENCES `survey-db`.`experts` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `survey-db`.`experts_has_results1`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `survey-db`.`experts_has_results1` ;\n\nCREATE TABLE IF NOT EXISTS `survey-db`.`experts_has_results1` (\n  `experts_id` INT NOT NULL,\n  `results_id` INT NOT NULL,\n  PRIMARY KEY (`experts_id`, `results_id`),\n  INDEX `fk_experts_has_results1_results1_idx` (`results_id` ASC) VISIBLE,\n  INDEX `fk_experts_has_results1_experts1_idx` (`experts_id` ASC) VISIBLE,\n  CONSTRAINT `fk_experts_has_results1_experts1`\n    FOREIGN KEY (`experts_id`)\n    REFERENCES `survey-db`.`experts` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_experts_has_results1_results1`\n    FOREIGN KEY (`results_id`)\n    REFERENCES `survey-db`.`results` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\nSET SQL_MODE=@OLD_SQL_MODE;\nSET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;\nSET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;\n")])])]),n("h2",{attrs:{id:"restfull-сервіс-для-управління-даними"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#restfull-сервіс-для-управління-даними"}},[e._v("#")]),e._v(" RESTfull сервіс для управління даними")]),e._v(" "),n("h3",{attrs:{id:"вхідна-точка-проєкту"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#вхідна-точка-проєкту"}},[e._v("#")]),e._v(" Вхідна точка проєкту:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("'use strict';\n\nconst express = require('express');\nconst { Pool } = require('./db/pool.js');\nconst { getQuiz, getAllQuizes, createQuiz, deleteQuiz, updateQuiz, deleteAllQuizes} = require('./controller/controllers.js');\n\nconst router = express();\nconst jsonParse = express.json();\n\nrouter.get('/quiz/:id', getQuiz);\nrouter.get('/quizes/', getAllQuizes);\nrouter.post('/quiz/', jsonParse, createQuiz);\nrouter.put('/quiz/:id', jsonParse, updateQuiz);\nrouter.delete('/quiz/:id', deleteQuiz);\nrouter.delete('/quizes/', deleteAllQuizes);\n\nrouter.listen(3000);\n")])])]),n("h3",{attrs:{id:"підключення-до-бази-даних"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#підключення-до-бази-даних"}},[e._v("#")]),e._v(" Підключення до бази даних:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('\'use strict\';\n\nconst mysql = require(\'mysql2\');\n\nconst Pool = mysql.createConnection({\n  host: "localhost",\n  user: "root",\n  password: "nazar11224",\n  database: "surveydb"\n});\n\nmodule.exports = { Pool };\n')])])]),n("h3",{attrs:{id:"контролери"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#контролери"}},[e._v("#")]),e._v(" Контролери:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("'use strict';\n\nconst { sql, executeSql } = require('../model/model');\n\n\nconst getQuiz = (req, res) => {\n  executeSql(sql.readQuiz(req.params), res);\n};\n\nconst getAllQuizes = (req, res) => {\n  executeSql(sql.readAllQuizes(), res);\n};\n\nconst createQuiz = (req, res) => {\n  if (!req.body) return res.sendStatus(400);\n  const date = new Date();\n  const isoDate = date.toISOString().slice(0, 19).replace('T', ' ');\n  const uid = Math.floor(1000 + Math.random() * 9000);\n  executeSql(sql.createQuiz(req.body.text, isoDate, uid), res);\n};\n\nconst deleteQuiz = (req, res) => {\n  executeSql(sql.deleteQuiz(req.params), res);\n};\n\nconst updateQuiz = (req, res) => {\n  if (!req.body) return res.sendStatus(400);\n  const date = new Date();\n  const isoDate = date.toISOString().slice(0, 19).replace('T', ' ');\n  const uid = Math.floor(1000 + Math.random() * 9000);\n  executeSql(sql.updateQuiz(req.params.id, req.body.text, isoDate, uid), res);\n};\n\nconst deleteAllQuizes = (req, res) => {\n  executeSql(sql.deleteAllQuizes(), res)\n}\n\nmodule.exports = { getQuiz, getAllQuizes, createQuiz, deleteQuiz, updateQuiz, deleteAllQuizes };\n")])])]),n("h3",{attrs:{id:"модель"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#модель"}},[e._v("#")]),e._v(" Модель:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('\'use strict\';\n\nconst { Pool } = require(\'../db/pool\');\n\nconst sql = {\n  createQuiz: (text, date, uid ) => {\n    return `INSERT INTO surveydb.quizes (id, text, date, user_id) VALUES (${null}, \\"${text}\\", \\"${date}\\", ${uid})`;\n  },\n  readQuiz: ({ id }) => `SELECT * FROM surveydb.quizes WHERE id = ${id}`,\n  readAllQuizes: () => `SELECT * FROM surveydb.quizes`,\n  updateQuiz: ( id, text, date, uid ) => {\n    return `UPDATE surveydb.quizes SET text = \\"${text}\\", date = \\"${date}\\", user_id = ${uid} WHERE id = ${id}`;\n  },\n  deleteQuiz: ({ id }) => `DELETE FROM surveydb.quizes WHERE id = ${id}`,\n  deleteAllQuizes: () => `DELETE FROM surveydb.quizes`,\n};\n\nconst executeSql = (sql, res) => {\n  Pool.query(sql, (error, result) => {\n    if (error) return res.status(500).json(error);\n    result ? res.send(result) : res.sendStatus(404);\n  });\n};\n\nmodule.exports = { sql, executeSql };\n')])])])])}),[],!1,null,null,null);s.default=t.exports}}]);