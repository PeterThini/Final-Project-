// db.js
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',    
  user: process.env.DB_USER || 'root',         
  password: process.env.DB_PASSWORD || 'D740090016@Pt',     
  database: process.env.DB_NAME || 'farmers_db' 
});

// Establish a connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as ID', connection.threadId);
});

module.exports = connection;
