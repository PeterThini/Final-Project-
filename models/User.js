const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db'); // Adjust path if needed

const User = sequelize.define('User', {
  // Define your model attributes here
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User; // Export the User model
