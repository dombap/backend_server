'use strict';
var mysql = require('mysql');
var base64 = require('base-64');

var db_config = {
  host: "localhost",
  user: "root",
  password: "admin"
};

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since // the old one cannot be reused.
  // The server is either down // or restarting (takes a while sometimes).
  connection.connect(function (err) {
    if (err) {
      console.log('error when connecting to db:', err);
      // We introduce a delay before attempting to reconnect, to avoid a hot loop,
      // And to allow our node script to process asynchronous requests in the meantime.
      setTimeout(handleDisconnect, 2000);
    }
  });
  // If you're also serving http, display a 503 error.
  connection.on('error', function (err) {
    console.log('db error', err);
    // Connection to the MySQL server is usually
    // Lost due to either server restart, or a connnection idle timeout
    //(the wait_timeout // server variable configures this)
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "tkt_mgmt",
  connectionLimit : 100,
  multipleStatements: true
});

module.exports = pool;
