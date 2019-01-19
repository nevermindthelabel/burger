const connection = require('./connection')

const orm = {
  selectAll: (tableInput) => {
    const query = 'SELECT * FROM ?';
    connection.query(query, [tableInput], (error, result) => {
      if (error) throw error;
      console.log(result);
    });
  },
  insertOne: () => {
    const insertQuery = 'INSERT INTO burgers ? '
  },
  updateOne: () => {

  }
};


module.exports = orm;
