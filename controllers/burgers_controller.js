const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (request, response) => {
  burger.all(data => {
    const allBurgerData = {
      burgers: data
    };
    console.log(allBurgerData);
    response.render('index', allBurgerData);
  });
});
router.post('/api/burgers', (request, response) => {
  burger.createOne(
    ['burger_name', 'devoured'],
    [request.body.burger_name, request.body.devoured],
    result => {
      response.json({ id: result.insertId });
    }
  );
});
router.put('/api/burgers', (request, response) => {
  burger.updateOne(
    ['burger_name', 'devoured'],
    [request.body.burger_name, request.body.devoured],
    result => {
      response.json({ id: result.insertId });
    }
  );
});
module.exports = router;
