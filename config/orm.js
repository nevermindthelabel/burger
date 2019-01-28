// // Import the MySQL connection object
// const connection = require('./connection.js');

// // Helper function for generating MySQL syntax
// function printQuestionMarks(num) {
//   const array = [];

//   for (let i = 0; i < num; i++) {
//     array.push('?');
//   }

//   return array.toString();
// }

// // Helper function for generating My SQL syntax
// function objToSql(object) {
//   const array = [];

//   for (const key in object) {
//     array.push(`${key}=${object[key]}`);
//   }

//   return array.toString();
// }

// // Create the ORM object to perform SQL queries

// const orm = {
//   selectAll: (table, callBack) => {
//     const query = `SELECT * FROM ${table};`;
//     connection.query(query, (error, result) => {
//       if (error) throw error;
//       callBack(result);
//     });
//   },
//   insertOne: (table, columns, values, callBack) => {
//     const insertQuery = `INSERT INTO ${table} (${columns.toString()}) VALUES (${printQuestionMarks(
//       values.length
//     )});`;
//     connection.query(insertQuery, values, (error, result) => {
//       if (error) throw error;
//       callBack(result);
//       console.log(result, insertQuery);
//     });
//   },
//   updateOne: (table, burgerColumnValues, condition, callBack) => {
//     const updateQuery = `UPDATE ${table} SET ${objToSql(burgerColumnValues)} WHERE ${condition}`;
//     connection.query(updateQuery, (error, result) => {
//       if (error) throw error;
//       callBack(result);
//       console.log(result);
//     });
//   }
// };

// module.exports = orm;

// const connection = require('./connection.js');

// const orm = {
//   selectAll(table, callBack) {
//     const queryString = 'SELECT * FROM ??;';
//     connection.query(queryString, [table], (error, data) => {
//       if (error) {
//         throw error;
//       }
//       callBack(data);
//     });
//   },
//   insertOne(table, column, value, cb) {
//     const queryString = 'INSERT INTO ?? (??) VALUES (?);';
//     connection.query(queryString, [table, column, value], (error, data) => {
//       if (error) {
//         throw error;
//       }
//       cb(data);
//     });
//   },
//   updateOne(table, column, value, condition, callBack) {
//     const queryString = 'UPDATE ?? SET ??=? WHERE id=?;';
//     connection.query(queryString, [table, column, value, condition], (error, data) => {
//       if (error) {
//         throw error;
//       }
//       callBack(data);
//     });
//   }
// };

// module.exports = orm;

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
