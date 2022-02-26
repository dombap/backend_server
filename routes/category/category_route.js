'use strict';
var category = require('../../models/category/category_api');
module.exports = function (app, database) {
  app.get('/getallcategories', function (req, res) {
    category.getCategoryList(req, res);
  });
  app.post('/addcategory', function (req, res) {
    category.addCategory(req, res);
  });
  app.post('/delcategory', function (req, res) {
    category.deleteCategory(req, res);
  });
  app.put('/updateCategory', function (req, res) {
    category.updateCategory(req, res);
  });
};