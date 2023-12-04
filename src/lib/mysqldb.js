const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 5, // 最多接收连接数，默认10
  maxIdle: 20, // 允许最大空闲连接数，默认10
});

module.exports = pool.promise();
