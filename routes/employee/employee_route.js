'use strict';
var employee = require('../../models/employee/employee_api');
module.exports = function (app, database) {
  app.get('/getallemployees', function (req, res) {
    employee.getEmployeeList(req, res);
  });
  app.post('/addemployee', function (req, res) {
    employee.addEmployee(req, res);
  });
  app.get('/login', function (req, res) {
    employee.login(req, res);
  });
};