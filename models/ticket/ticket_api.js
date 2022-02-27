'use strict';
var pool = require('./../../config/db_config');
var moment = require('moment');

var ticket = {
  // Api to retrieve all ticket
  getTicketList: function (req, res) {
    pool.getConnection(function (err, conn) {
      if (err) res.status(400);
      // var case_id = req.query.case;
      var sql = "SELECT td.id,td.description,ed.firstName AS created_by,ed1.firstName AS created_for,cat.name FROM ticket_details AS td JOIN emp_details AS ed ON td.created_by = ed.id JOIN emp_details AS ed1 ON td.created_for = ed1.id JOIN category AS cat ON td.category = cat.id";
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
}
};
module.exports = ticket;
