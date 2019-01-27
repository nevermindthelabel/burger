const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (request, response) => {
  burger.all(data => {
    const allBurgerData = {
      burgers: data
    };
    // console.log(allBurgerData);
    response.render('index', allBurgerData);
  });
});

router.post('/api/burgers', (request, response) => {
  burger.createOne(['burger_name'], [request.body.burger_name], data => {
    // response.json({ id: result.insertId });
    response.redirect('/');
  });
});

router.put('/api/burgers/:id', (request, response) => {
  const condition = `id =${request.params.id}`;
  burger.updateOne(
    {
      devoured: true
    },
    condition,
    data => {
      response.redirect('/');
    }
    // result => {
    //   response.json({ id: result.insertId });
    // }
  );
});
module.exports = router;
