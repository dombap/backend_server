'use strict';
var pool = require('./../../config/db_config');
var moment = require('moment');

var ticket = {
  // Api to retrieve all ticket
  getTicketList: function (req, res) {
    pool.getConnection(function (err, conn) {
      if (err) res.status(400);
      // var case_id = req.query.case;
      var sql = "SELECT td.id,td.description,ed.id AS created_by_id,ed1.id AS created_for_id,cat.id AS category_id,ed.firstName AS created_by,ed1.firstName AS created_for,cat.name FROM ticket_details AS td JOIN emp_details AS ed ON td.created_by = ed.id JOIN emp_details AS ed1 ON td.created_for = ed1.id JOIN category AS cat ON td.category = cat.id";
      conn.query(sql,function (err, rows) {
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(200).json(rows);
        }
      });
    });
  },
  addTicket: function (req, res) {
    pool.getConnection(function (err, conn) {  
      console.log(' req.body.----', req.body);  
      if (err) res.status(400);
      var createdBy = req.body.createdBy;
      var createdFor= req.body.createdFor;
      var category= req.body.category;
      var desc= req.body.desc;
      var createdOn = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
      var paramsArray = [createdBy,createdFor,category,desc,createdOn];
      var sql = " INSERT INTO ticket_details (created_by,created_for,category,description,created_on) VALUES(?,?,?,?,?)"
      conn.query(sql, paramsArray, function (err, rows) {
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(200).json(rows);
        }
      });
    })
},
deleteTicket: function (req, res) {
  pool.getConnection(function (err, conn) {    
    if (err) res.status(400);
    var id = req.body.deleteId;
    console.log('id---',id);
    var sql = "DELETE FROM ticket_details WHERE  id= ?";
    conn.query(sql, id, function (err, rows) {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(rows);
      }
    });
  })
},
updateTicket: function (req, res) {
  console.log(' req.body----', req.body);
pool.getConnection(function (err, conn) {    
  if (err) res.status(400);
  var createdBy = req.body.createdBy1.id;
  var createdFor= req.body.createdFor1.id;
  var category= req.body.category1.id;
  var desc= req.body.desc1;
  var id = req.body.id;
  console.log('req.body---',req.body);
  var paramsArray = [createdBy,createdFor,category,desc,id];
  console.log('paramsArray----',paramsArray);
  var sql = "UPDATE ticket_details SET `created_by`=?,`created_for`=?,`category`=?,`description`=? WHERE `id`=?";
  conn.query(sql, paramsArray, function (err, rows) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(rows);
    }
  });
})
}
};
module.exports = ticket;
