'use strict';
var pool = require('./../../config/db_config');
var moment = require('moment');

var ticket = {
  // Api to retrieve all ticket
  getTicketList: function (req, res) {
    pool.getConnection(function (err, conn) {
      if (err) res.status(400);
      // var case_id = req.query.case;
      var sql = "select * from ticket_details";
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
      if (err) res.status(400);
      var subject = req.body.short_description;
      var description = req.body.description;
      var priority = req.body.priority;
      var group = req.body.assignment_group;
      var category = req.body.category;
      var assignedBy = req.body.opened_by;
      var assignedTo = req.body.assigned_to;
      var status = req.body.state;
      var createdOn = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
      var impactedUser = req.body.impacted_user;

      var paramsArray = [subject,description,priority,group,category,assignedBy,assignedTo,createdOn,status,impactedUser];
      var sql = " INSERT INTO ticket_details (created_by,created_for,category,desc) VALUES(?,?,?,?)"
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
