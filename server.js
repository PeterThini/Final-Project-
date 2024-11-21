const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes'); // Authentication routes
const adminRoutes = require('./routes/adminRoutes'); // Admin routes
const path = require('path');
const sequelize = require('./db'); // MySQL database connection from db.js
const checkAdmin = require('./middleware/checkAdmin'); // Admin middleware

dotenv.config();

const app = express();
const port = 4500;

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Test the database connection using sequelize.authenticate()
sequelize.authenticate()  
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch(err => {
    console.error('Error with database connection:', err);
  });

// Use the auth routes for authentication-related requests
app.use('/api/auth', authRoutes);

// Use the admin routes for admin-related requests
app.use('/api/admin', adminRoutes); // The 'checkAdmin' middleware will be applied to these routes

// Serve the landing page at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing-page.html')); // Serve the landing-page.html from the 'public' folder
});

// Serve the registration page
app.get('/registration', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'registration.html'));
});

// Serve the login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Import the User model
const User = require('./models/User');

// Example of creating a new user
const newUser = {
  username: 'exampleUser',
  password: 'password123',
  email: 'user@example.com'
};

User.create(newUser)
  .then(user => {
    console.log('User created successfully:', user);
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });

// Sync the 'User' model with the database
User.sync()
  .then(() => console.log("Users table synced"))
  .catch(err => console.error("Error syncing table:", err));

// Protected route for admin control using checkAdmin middleware
app.post('/admin/create', checkAdmin, (req, res) => {
  // Only admins can access this route
  res.send('Admin control: Create something.');
});

// Serve static files (like CSS, images, etc.) from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Sync the database tables
sequelize.sync({ force: true })  // This forces a re-sync
  .then(() => console.log('Database sync complete.'));
