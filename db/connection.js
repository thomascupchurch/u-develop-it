const mysql = require('mysql2')

const special = console.log('export PATH="${PATH}:/usr/local/mysql/bin/"');


// Connect to database
const db = mysql.createConnection(
    
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'WalkerUp1*',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;