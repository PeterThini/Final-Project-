const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create a Sequelize instance
const sequelize = new Sequelize({
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'D740090016@Pt',
  database: process.env.DB_NAME || 'farmers_db',
});

module.exports = sequelize;  // Export sequelize instance
