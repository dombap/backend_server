'use strict';
var pool = require('./../../config/db_config');

var employee = {
    getEmployeeList: function (req, res) {
        pool.getConnection(function (err, conn) {
          if (err) res.status(400);
          var sql = "select * from emp_details";
          conn.query(sql,function (err, rows) {
            if (err) {
              res.status(400).json(err);
            } else {
              res.status(200).json(rows);
            }
          });
        });
      },
      addEmployee: function (req, res) {
        pool.getConnection(function (err, conn) {    
          if (err) res.status(400);
          var firstName = req.body.firstName;
          var lastName = req.body.lastName;
          var email = req.body.email;
          var password = req.body.password;
          var paramsArray = [firstName,lastName,email,password];
          var sql = " INSERT INTO emp_details (firstName,lastName,email,password) VALUES(?,?,?,?)"
          conn.query(sql, paramsArray, function (err, rows) {
            if (err) {
              res.status(400).json(err);
            } else {
              res.status(200).json(rows);
            }
          });
        })
    },
    login: function (req, res) {
      pool.getConnection(function (err, conn) {   
        console.log('req----',req); 
        if (err) res.status(400);
        var email = req.body.email;
        var password = req.body.password;
        var paramsArray = [email,password];
        console.log('req.query----',req.query);
        console.log('req.body---',req.body);
        var sql = " Select * from emp_details where email = ? and password = ?"
        conn.query(sql, paramsArray, function (err, rows) {
          if (err) {
            res.status(400).json(err);
          } else {
            console.log('sql---',sql);
            res.status(200).json(rows);
          }
        });
      })
  },
}
module.exports = employee;