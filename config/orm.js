// Import the MySQL connection object
const connection = require('./connection.js');

// Helper function for generating MySQL syntax
function printQuestionMarks(num) {
  const array = [];

  for (let i = 0; i < num; i++) {
    array.push('?');
  }

  return array.toString();
}

// Helper function for generating My SQL syntax
function objToSql(object) {
  const array = [];

  for (const key in object) {
    array.push(`${key}=${object[key]}`);
  }

  return array.toString();
}

// Create the ORM object to perform SQL queries

const orm = {
  selectAll: (table, callBack) => {
    const query = `SELECT * FROM ${table};`;
    connection.query(query, (error, result) => {
      if (error) throw error;
      callBack(result);
    });
  },
  insertOne: (table, columns, values, callBack) => {
    const insertQuery = `INSERT INTO ${table} (${columns.toString()}) VALUES (${printQuestionMarks(
      values.length
    )});`;
    connection.query(insertQuery, values, (error, result) => {
      if (error) throw error;
      callBack(result);
      console.log(result, insertQuery);
    });
  },
  updateOne: (table, burgerColumnValues, condition, callBack) => {
    const updateQuery = `UPDATE ${table} SET ${objToSql(burgerColumnValues)} WHERE ${condition}`;
    connection.query(updateQuery, (error, result) => {
      if (error) throw error;
      callBack(result);
      console.log(result);
    });
  }
};

module.exports = orm;
