const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

displayDepartments = () => {
    console.log('---Departments--- \n')
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
      promptUser();
      });
    };

module.exports = router;