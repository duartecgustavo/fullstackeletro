const mysql = require('mysql');

const Db = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "fseletro_v3"
});

module.exports = Db;