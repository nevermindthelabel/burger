const mysql = require('mysql');
require('dotenv').config();

let connection;

const dbPassword = process.env.DATABASE_PASSWORD;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: dbPassword,
    database: 'burgers_db'
  });
}

connection.connect((error) => {
  if (error) {
    console.log(error);
  }
  console.log(`connected as ${connection.threadId}`);
});
module.exports = connection;