'use strict';
var employee = require('../../models/employee/employee_api');
console.log('line 3----');
module.exports = function (app, database) {
  app.get('/getallemployees', function (req, res) {
    employee.getEmployeeList(req, res);
  });
  app.post('/addemployee', function (req, res) {
    employee.addEmployee(req, res);
  });
  app.post('/login', function (req, res) {
    employee.login(req, res);
  });
  app.post('/delemployee', function (req, res) {
    console.log('line 14---');
    employee.deleteEmployee(req, res);
  });
  app.put('/updateemployee', function (req, res) {
    employee.updateEmployee(req, res);
  });

};