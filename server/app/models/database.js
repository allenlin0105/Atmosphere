const mysql = require("mysql2");
const dbConfig = require("../config/db.config");

// Create database and table if not exists
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    multipleStatements: true
});
connection.connect(err => {
    if (err) throw err;
    console.log("Connected.");

    let mysqlQuery = `CREATE DATABASE IF NOT EXISTS ${dbConfig.DB};`;
    mysqlQuery += `USE ${dbConfig.DB};`;
    mysqlQuery += `CREATE TABLE IF NOT EXISTS Records (id INT NOT NULL AUTO_INCREMENT, title VARCHAR(255), time INT, PRIMARY KEY (id));`;
    connection.query(mysqlQuery, (err, result) => {
        if (err) throw err;
        console.log("DATABASE and TABLE created.");
        connection.end();
    });
});

// Create connection pool
const db = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

module.exports = db;