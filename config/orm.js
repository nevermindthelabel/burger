const connection = require('./connection');

const orm = {
  selectAll: (table, callBack) => {
    const query = `SELECT * FROM burgers;`;
    connection.query(query, (error, result) => {
      if (error) throw error;
      callBack(result);
    });
  },
  insertOne: data => {
    const insertQuery = 'INSERT INTO burgers VALUES ?;';
    console.log(`This is the result: ${data}`);
    connection.query(insertQuery, [data], (error, result) => {
      if (error) throw error;
      console.log(result, insertQuery);
    });
  },
  updateOne: (colName, id) => {
    const updateQuery = 'UPDATE burgers SET ? WHERE ?';
    console.log(`this is the ${updateQuery}`);
    connection.query(updateQuery, [colName, id], (error, result) => {
      if (error) throw error;
      console.log(result);
    });
  }
};

module.exports = orm;
