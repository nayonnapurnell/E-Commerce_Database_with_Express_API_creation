// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Categories.hasMany(Products, {
  foreignKey: 'product_id'
});

// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tags, {
  foreignKey: 'product_tag_id'
});

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {
  foreignKey: 'product_tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
