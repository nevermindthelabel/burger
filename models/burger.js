const orm = require('../config/orm');

const burger = {
  all: callback => orm.selectAll('burgers', response => callback(response)),

  createOne: (columns, values, callBack) => {
    orm.insertOne('burgers', columns, values, response => {
      callBack(response);
    });
  },

  updateOne: (burgerColumnValues, condition, callBack) => {
    orm.updateOne('burgers', burgerColumnValues, condition, response => {
      callBack(response);
    });
  }
};

module.exports = burger;
