'use strict';
var pool = require('./../../config/db_config');

var category = {
    getCategoryList: function (req, res) {
        pool.getConnection(function (err, conn) {
          if (err) res.status(400);
          var sql = "select * from category";
          conn.query(sql,function (err, rows) {
            if (err) {
              res.status(400).json(err);
            } else {
              res.status(200).json(rows);
            }
          });
        });
      },
      addCategory: function (req, res) {
        pool.getConnection(function (err, conn) {    
          if (err) res.status(400);
          var name = req.body.name;
          var description = req.body.desc;
          var paramsArray = [name,description];
          var sql = "INSERT INTO `tkt_mgmt`.`category` (`name`, `desc`) VALUES (?,?)";
          conn.query(sql, paramsArray, function (err, rows) {
            if (err) {
              res.status(400).json(err);
            } else {
              res.status(200).json(rows);
            }
          });
        })
    },
    deleteCategory: function (req, res) {
      pool.getConnection(function (err, conn) {    
        if (err) res.status(400);
        var id = req.body.deleteId;
        console.log('id---',id);
        var sql = "DELETE FROM category WHERE  id= ?";
        conn.query(sql, id, function (err, rows) {
          if (err) {
            res.status(400).json(err);
          } else {
            res.status(200).json(rows);
          }
        });
      })
  },
  updateCategory: function (req, res) {
    pool.getConnection(function (err, conn) {    
      if (err) res.status(400);
      var name = req.body.name1;
      var description = req.body.desc1;
      var id = req.body.id;
      console.log('req.body---',req.body);
      var paramsArray = [name,description,id];
      var sql = "UPDATE category SET `name`=?,`desc`=? WHERE `id`=?";
      conn.query(sql, paramsArray, function (err, rows) {
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(200).json(rows);
        }
      });
    })
}
}
module.exports = category;