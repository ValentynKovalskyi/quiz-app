const mysql = require('mysql');
const databaseConfig = require('../config/database.config');

async function query(sql, params) {
    const connection = mysql.createConnection(databaseConfig);
}


