/*const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const cTable = require('console.table');


displayDepartments = () => {
router.get('/employee', (req, res) => {

    console.log('---Departments--- \n')
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
      promptUser();
      });
    });
  };

module.exports = router;*/