'use strict';
var tickets = require('./ticket/ticket_route');
var employee = require('./employee/employee_route');
var category = require('./category/category_route');

module.exports = function (app, database) {
  tickets(app, database);
  employee(app, database);
  category(app,database);
}