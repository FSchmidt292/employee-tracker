const express = require('express');
const inquirer = require('inquirer')
const db = require('./db/connection.js');
const cTable = require('console.table');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
//app.use('/api', apiRoutes);

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
    choices: ['View all Departments',
              'View all Roles', 
              'View all Employees', 
              'Add a new Department', 
              'Add a new Role', 
              'Add a new Employee', 
              'Update an existing Employee', 
              'Exit'
]}

  ])
  .then((answers) => {
    const { options } = answers;

    if (options === 'View all Departments') {
      displayDepartments();
    }
    if (options === 'View all Roles') {
      displayRoles();
    }
    if (options === 'View all Employees') {
      displayEmployees();
    }
    if (options === 'Add a new Department') {
      addDepartment();
    }

    if (options === 'Add a new Role') {
      addRole();
    }

    if (options === 'Add a new Employee') {
      addEmployee();
    }

    if (options === 'Update an existing Employee') {
      updateEmployee();
    }
    if (options === 'Exit') {
    db.end();
  };
});
};

addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input', 
      name: 'newDepartment',
      message: "Add your department!",
      validate: newDepartment => {
        if (newDepartment) {
            return true;
        } else {
            console.log('Enter your new department!');
            return false;
        }
      }
    }
  ])
    .then(options => {
      const sql = `INSERT INTO department (desc_department)
                   VALUES (?)`;
      db.query(sql, options.newDepartment, (err, result) => {
        if (err) throw err;
        console.log('Added ' + options.newDepartment + " to departments!"); 

        displayDepartments();
    });
  });
};

addRole = () => {
  inquirer.prompt([
    {
      type: 'input', 
      name: 'role',
      message: "Add a new Role!",
      validate: addRole => {
        if (addRole) {
            return true;
        } else {
            console.log('Enter your new role!');
            return false;
        }
      }
    },
    {
      type: 'input', 
      name: 'salary',
      message: "What is the salary of this role?",
      validate: addSalary => {
        if (Number.isInteger(JSON.parse(addSalary))) {
            return true;
        } else {
            console.log('Please enter the salary for this new role!');
            return false;
        }
      }
    }
  ])
    .then(options => {
      const params = [options.role, options.salary];

      // grab dept from department table
      const roleSql = `SELECT desc_department, id FROM department`; 

      currentRole = db.query(roleSql, (err, data) => {
        if (err) throw err; 
       const dept = data.map(({ name, id }) => ({ name: name, value: id }));
       displayDepartInternal();

       function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }
      
      delay(1000).then(() => inquirer.prompt([
        {
          type: 'list', 
          name: 'dept',
          message: "What department is this role in?",
          choices: dept
        }
        ]))
          .then(deptChoice => {
            const dept = deptChoice.dept;
            params.push(dept);

            const sql = `INSERT INTO roles (title, salary, department_id)
                        VALUES (?, ?, ?)`;

            db.query(sql, params, (err, result) => {
              if (err) throw err;
              console.log('Added to roles!'); 

              displayRoles();
       });
     });
   });
 });
};


displayDepartments = () => {  
  console.log('---Departments--- \n')
  const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
  if (err) throw err;
  console.table(rows);
  promptUser();
  });
};

displayDepartInternal = () => {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    });
};

displayRoles = () => {  
  console.log('---Roles--- \n')
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    promptUser();
    });
  };

displayEmployees = () => {  
  console.log('---Employees--- \n')
  const sql = `SELECT * FROM employee`;
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    promptUser();
    });
  };



promptUser();

//Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

// post to JSON

//module.exports = router;