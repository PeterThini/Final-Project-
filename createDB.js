require('dotenv').config();
const mysql = require('mysql2');

// Create a connection to MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'D740090016@Pt',
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

// Step 1: Create the database if it doesn't exist
const createDatabase = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'farmers_db'}`;
connection.query(createDatabase, (err, results) => {
  if (err) {
    console.error('Error creating database:', err.stack);
    return;
  }
  console.log('Database created or already exists');
  
  // Step 2: Use the database
  const useDatabase = `USE ${process.env.DB_NAME || 'farmers_db'}`;
  connection.query(useDatabase, (err, results) => {
    if (err) {
      console.error('Error using database:', err.stack);
      return;
    }
    console.log('Using the database');

    // Step 3: Create the tables
    const createUsersTable = `
      CREATE TABLE IF NOT EXISTS Users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        isAdmin BOOLEAN DEFAULT FALSE,  
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `;

    const createFarmersTable = `
      CREATE TABLE IF NOT EXISTS Farmers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        location VARCHAR(255),
        crops TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Run queries to create tables
    connection.query(createUsersTable, (err, results) => {
      if (err) {
        console.error('Error creating Users table:', err.stack);
        return;
      }
      console.log('Users table created or already exists');
    });

    connection.query(createFarmersTable, (err, results) => {
      if (err) {
        console.error('Error creating Farmers table:', err.stack);
        return;
      }
      console.log('Farmers table created or already exists');
    });

    // Close the connection once done
    connection.end();
  });
});
