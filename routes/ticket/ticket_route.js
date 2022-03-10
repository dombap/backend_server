'use strict';
var ticket = require('../../models/ticket/ticket_api');
module.exports = function (app, database) {
  app.get('/getticketslist', function (req, res) {
    ticket.getTicketList(req, res);
  });
  app.post('/addticket', function (req, res) {
    ticket.addTicket(req, res);
  });
  app.post('/delticket', function (req, res) {
    ticket.deleteTicket(req, res);
  });
  app.put('/updateticket', function (req, res) {
    ticket.updateTicket(req, res);
  });
};