// Import the MySQL connection object
const connection = require('./connection.js');

// Helper function for generating MySQL syntax
function printQuestionMarks(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
}

// Helper function for generating My SQL syntax
function objToSql(ob) {
  const arr = [];

  for (const key in ob) {
    arr.push(`${key}=${ob[key]}`);
  }

  return arr.toString();
}

// Create the ORM object to perform SQL queries
const orm = {
  // Function that returns all table entries
  selectAll(tableInput, cb) {
    // Construct the query string that returns all rows from the target table
    const queryString = `SELECT * FROM ${tableInput};`;

    // Perform the database query
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      // Return results in callback
      cb(result);
    });
  },

  // Function that insert a single table entry
  insertOne(table, cols, vals, cb) {
    // Construct the query string that inserts a single row into the target table
    let queryString = `INSERT INTO ${table}`;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    // console.log(queryString);

    // Perform the database query
    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      // Return results in callback
      cb(result);
    });
  },

  // Function that updates a single table entry
  updateOne(table, objColVals, condition, cb) {
    // Construct the query string that updates a single entry in the target table
    let queryString = `UPDATE ${table}`;

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    // console.log(queryString);

    // Perform the database query
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      // Return results in callback
      cb(result);
    });
  }
};

// Export the orm object for use in other modules
module.exports = orm;
