const mysql = require('mysql');
const env = process.env;
const database = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
});

module.exports = database;