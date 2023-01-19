require('dotenv').config();
const express = require('express');
const routes = require('./Develop/routes');
const sequelize = require('./Develop/config/connection');
//console.log(process.env);

const Product = require('./Develop/models/Product');
const Category = require('./Develop/models/Category');
const ProductTag = require('./Develop/models/ProductTag');
const Tag = require('./Develop/models/Tag');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening on port ${PORT}!'));
});
