
'use strict';
var backup = {
  backupData: function () {
    var mysqldump = require('mysqldump');
    var now = new Date();
    var month=now.getMonth()+1;
    var filename = 'Backup ' + now.getFullYear() + "-" + month +
      "-" + now.getDate() + "-" + now.getHours() + "-" + now.getMinutes() + "-"
      + now.getSeconds() + '.sql'
    mysqldump({
      connection: {
        host: "localhost",
        user: "root",
        password: "admin",
        database: "tkt_mgmt",
      },
      dumpToFile: './assets/db_backup/' + filename
    });
  }
//   delBackupData: function () {
//     var fs = require('fs');
//     var path = require('path');
//     var rimraf = require('rimraf');
//     var uploadsDir =__dirname + process.env.DB_BACKUP_DELETE_PATH;
//     fs.readdir(uploadsDir, function (err, files) {
//       if (err) throw err;
//       files.forEach(function (file, index) {
//         fs.stat(path.join(uploadsDir, file), function (err, stat) {
//           var endTime, now;
//           if (err) {
//             return console.error(err);
//           }
//           now = new Date().getTime();
//           //For 30 Days
//           endTime = new Date(stat.ctime).getTime() + (3600000 * 24 * 30); 
//           if (now > endTime) {
//             return rimraf(path.join(uploadsDir, file), function (err) {
//               if (err) {
//                 return console.error(err);
//               }
//               console.log('successfully deleted');
//             });
//           }
//         });
//       });
//     });
//   }
}
module.exports = backup;

