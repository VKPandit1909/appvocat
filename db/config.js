var mysql = require('mysql');

// ENVIRONMENT VARIABLES
require("dotenv").config();

var pool  = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
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