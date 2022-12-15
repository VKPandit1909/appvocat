var mysql = require('mysql');
var pool  = mysql.createPool({
  host: "62.171.173.184",
  port: "3306",
  user: "phpmyadmin",
  password: "vnw6!eHL",
  database: "appvocat",
  charset: "utf8mb4",
});

pool.getConnection(function(err, connection) {
  //   connection.query( 'SELECT something FROM sometable', function(err, rows) {

  //     console.log(pool._freeConnections.indexOf(connection)); // -1

  //     connection.release();

  //     console.log(pool._freeConnections.indexOf(connection)); // 0

  //  });
  // connection.release();
});

var connection = pool;
module.exports.connection = connection;
module.exports.pool = pool;