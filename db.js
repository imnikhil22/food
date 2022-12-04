require("dotenv").config();

const mysql = require("mysql");
const k = 1
const pool = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DATABASE_PASSWORD,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  ssl: process.env.DB_SSL == "true" ? true : false,
  multipleStatements: true,
});

module.exports = pool
