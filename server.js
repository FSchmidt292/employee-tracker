const express = require('express');
const inquirer = require('inquirer')
const res = require('express/lib/response');
const db = require('./db/connection.js');
const cTable = require('console.table');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');
const apiRoutes = require('./routes/apiRoutes');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => { 
  res.status(404).end();
});
//activate CLI prompts for user input
const promptUser = () => {
  inquirer.prompt([
    {
    type: 'list',
    name: 'options',
    message: 'Please select one of the following options',
    choices: ['View all departments',
              'View all roles',
              'View all employees']
    }
  ])
  .then((answers) => {
    const { options } = answers;

    if (options === 'View all departments') {
      displayDepartments();
    }
    if (options === 'View all roles') {
      displayRoles();
    }
    if (options === 'View all employees') {
      displayEmployees();
    }
  })
};

promptUser();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

/* Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});*/
// post to JSON

//module.exports = router;