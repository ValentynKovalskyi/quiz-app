const mysql = require('mysql');
const databaseConfig = require('../config/database.config');

async function query(sql, params) {
    const connection = await mysql.createConnection(databaseConfig);
    const result = connection.

}

module.exports = {
    query
};


