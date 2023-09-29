const mysql = require('mysql');
const databaseConfig = require('../config/database.config');

async function query(query) {
    const connection = await mysql.createConnection(databaseConfig);
    connection.connect();
    connection.query(query, (err, result, fields) => {
        if(err) console.log(err);
    });

}

module.exports = {
    query
};


