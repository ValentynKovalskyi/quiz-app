const mysql = require('mysql');
const env = process.env;
const databaseConnection = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
});

module.exports = databaseConnection;