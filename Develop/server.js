const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const Product = require('./models/Product');
const Category = require('./models/Category');
const ProductTag = require('./models/ProductTag');
const Tag = require('./models/Tag');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening on port ${PORT}!'));
});
