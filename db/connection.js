const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'CrayolaBubble15!',
    database: 'election'
});

//export this module
module.exports = db;