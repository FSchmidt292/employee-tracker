const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    //your mySQL username,
    user: 'root',
    //your mySQL password
    //DELETE THIS LINE AND PASSWORD BEFORE SUBMITTING!!
    password: 'Ickl#Lkcjhw3bn4jklCJKSfh3kj43k*FD',
    database: 'company'
});

module.exports = db;