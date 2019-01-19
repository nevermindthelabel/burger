const mysql = require('mysql');

const dbPassword = process.env.DATABASE_PASSWORD;

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: dbPassword,
  database: 'burgers_db'
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  }
  console.log(`connected as ${connection.threadId}`);
});
module.exports = connection;