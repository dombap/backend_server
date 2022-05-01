'use strict';
var pool = require('./../../config/db_config');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aparnadomb3933@gmail.com',
    pass: 'erotpsojeuoibneg'
  }
});


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
          var address = req.body.address;
          var pincode = req.body.pincode;
          var mobile = req.body.mobile;
          var gender = req.body.gender;
          var paramsArray = [firstName,lastName,email,password,address,pincode,mobile,gender];
          var sql = " INSERT INTO emp_details (firstName,lastName,email,password,address,pincode,mobile,gender) VALUES(?,?,?,?,?,?,?,?)"
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
  deleteEmployee: function (req, res) {
    console.log('deleteEmployee----');
    pool.getConnection(function (err, conn) {    
      if (err) res.status(400);
      var id = req.body.deleteId;
      console.log('id---',id);
      var sql = "DELETE FROM emp_details WHERE  id= ?";
      conn.query(sql, id, function (err, rows) {
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(200).json(rows);
        }
      });
    })
  },
  updateEmployee: function (req, res) {
    console.log(' req.body----', req.body);
  pool.getConnection(function (err, conn) {    
    if (err) res.status(400);
    var firstName = req.body.firstName;
    var lastName= req.body.lastName;
    var email= req.body.email;
    var password= req.body.password;
    var pincode = req.body.pincode;
    var mobile= req.body.mobile;
    var gender= req.body.gender;
    var address= req.body.address;
    var id = req.body.id;
    var paramsArray = [firstName,lastName,email,password,address,pincode,mobile,gender,id];
    console.log('paramsArray----',paramsArray);
    
    var sql = "UPDATE emp_details SET `firstName`=?,`lastName`=?,`email`=?,`password`=?,`address`=?,`pincode`=?,`mobile`=?,`gender`=? WHERE `id`=?";
    conn.query(sql, paramsArray, function (err, rows) {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(rows);
      }
    });
  })
  },
  sendMail: function (req, res) {
    pool.getConnection(function (err, conn) {    
      if (err) res.status(400);
      var mailOptions = {
        from: 'aparnadomb3933@gmail.com',
        to: req.body.email,
        subject: 'Thank you for getting in touch!',
        html: `Hello ${req.body.firstName}&nbsp;${req.body.lastName},<br><b><i>Thank you for getting in touch!</i></b> <br><p>We appreciate you contacting us. We will get back in touch with you soon! Have a great day!</p><br>Thanks.`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          return info.response;
         
        }
      });
    })
  }
}
module.exports = employee;