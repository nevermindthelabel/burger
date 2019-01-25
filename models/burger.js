const orm = require('../config/orm');

const burger = {
  all: callback => orm.selectAll('burgers', response => callback(response)),

  createOne: (values, callback) => {
    orm.insertOne('burgers', values, response => callback(response));
  },

  updateOne: (colName, id, callback) => {
    orm.updateOne('burgers', [colName, id], response => callback(response));
  }
};

module.exports = burger;
