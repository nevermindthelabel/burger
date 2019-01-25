const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controller.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(PORT, () => console.log(`listening...always listening. Unless it crashes`));
