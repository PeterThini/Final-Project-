const express = require('express');
const checkAdmin = require('../middleware/checkAdmin');  // Import the checkAdmin middleware

const router = express.Router();

// Example of an admin-only route
router.get('/admin-dashboard', checkAdmin, (req, res) => {
  res.send('Welcome to the Admin Dashboard!');
});

// Other routes that require admin access can also use the checkAdmin middleware
router.post('/admin/create-user', checkAdmin, (req, res) => {
  // Handle user creation
  res.send('User created successfully!');
});

module.exports = router;
