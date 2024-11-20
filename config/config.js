// Load environment variables from .env file
require('dotenv').config();

console.log("DB_USERNAME:", process.env.DB_USERNAME);  // This will print your username from .env
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);  // This will print your password from .env

module.exports = {
  development: {
    username: process.env.DB_USERNAME || "default_username",  // Default to 'default_username' if not set
    password: process.env.DB_PASSWORD || "default_password",  // Default to 'default_password' if not set
    database: process.env.DB_NAME || "default_database",  // Default to 'default_database' if not set
    host: process.env.DB_HOST || "127.0.0.1",  // Default to '127.0.0.1' if not set
    dialect: "mysql"
  },
//   // Optional: You can remove the 'test' and 'production' environments if you don't need them
//   test: {
//     username: process.env.TEST_DB_USERNAME || "default_test_username",
//     password: process.env.TEST_DB_PASSWORD || "default_test_password",
//     database: process.env.TEST_DB_NAME || "default_test_database",
//     host: process.env.TEST_DB_HOST || "127.0.0.1",
//     dialect: "mysql"
//   },
//   production: {
//     username: process.env.PROD_DB_USERNAME || "default_prod_username",
//     password: process.env.PROD_DB_PASSWORD || "default_prod_password",
//     database: process.env.PROD_DB_NAME || "default_prod_database",
//     host: process.env.PROD_DB_HOST || "127.0.0.1",
//     dialect: "mysql"
//   }
};
