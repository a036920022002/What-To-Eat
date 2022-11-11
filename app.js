const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const router = require('./router/index');
require('./config/mongoose');
require('dotenv').config();

const app = express();
const port = process.env.port || 3000;
const restaurantAll = require('./models/restaurant.js');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use(router);

app.listen(port, () => console.log(`http://localhost:${port}`));
