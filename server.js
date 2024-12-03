const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Authentication routes
const adminRoutes = require('./routes/adminRoutes'); // Admin routes
const path = require('path');
const sequelize = require('./db'); // MySQL database connection from db.js
const checkAdmin = require('./middleware/checkAdmin'); // Admin middleware
const axios = require('axios'); // Axios for weather API requests
const User = require('./models/User'); // Import the User model

// Load environment variables from .env file
dotenv.config();

const app = express();
const API_KEY = process.env.API_KEY;  
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Middleware for CORS and parsing JSON requests
app.use(cors());
app.use(express.static('public'));
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
  res.sendFile(path.join(__dirname, 'public', 'landing-page.html'));
});

// Serve the registration page
app.get('/registration', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'registration.html'));
});

// Serve the login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});


// Weather API Integration
app.get('/weather', async (req, res) => {
  try {
    const location = 'Nairobi,KE'; // Customize for Kenya
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: location,
        units: 'metric',
        appid: API_KEY,
      },
    });

    
    const weather = {
      location: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
    };

    res.json(weather);
  } catch (error) {
    res.status(500).send('Error fetching weather data.');
  }
});

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
  .then(() => console.log('Users table synced'))
  .catch(err => console.error('Error syncing table:', err));

// Protected route for admin control using checkAdmin middleware
app.post('/admin/create', checkAdmin, (req, res) => {
  res.send('Admin control: Create something.');
});

// Sync the database tables
sequelize.sync({ force: false }) // Avoid force sync in production
  .then(() => console.log('Database sync complete.'))
  .catch(err => console.error('Error syncing database:', err));

// Start the server
const port = 4500;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




// const express = require('express');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes'); // Authentication routes
// const adminRoutes = require('./routes/adminRoutes'); // Admin routes
// const path = require('path');
// const sequelize = require('./db'); // MySQL database connection from db.js
// const checkAdmin = require('./middleware/checkAdmin'); // Admin middleware
// const axios = require('axios'); // Axios for weather API requests
// const User = require('./models/User'); // Import the User model
// // app.use(cors());
// // const express = require('express');
// // const axios = require('axios');
// // const cors = require('cors');
// // const path = require('path');
// const express = require('express');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const axios = require('axios'); // For making API requests to OpenWeatherMap
// const path = require('path');

// // Load environment variables from .env file
// dotenv.config();

// const app = express();
// const API_KEY = process.env.API_KEY;  // Ensure you have set your OpenWeatherMap API Key in your .env file
// const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// app.use(cors());
// app.use(express.static('public'));
// app.use(bodyParser.json());

// // Weather API Route
// app.get('/weather', async (req, res) => {
//   try {
//     const location = 'Nairobi,KE'; // Example location
//     const response = await axios.get(`${BASE_URL}/weather`, {
//       params: {
//         q: location,
//         units: 'metric',
//         appid: API_KEY,
//       },
//     });

//     const weather = {
//       location: response.data.name,
//       temperature: response.data.main.temp,
//       humidity: response.data.main.humidity,
//       windSpeed: response.data.wind.speed,
//     };

//     res.json(weather);
//   } catch (error) {
//     res.status(500).send('Error fetching weather data.');
//   }
// });

// // Serve the landing page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html')); // Assuming index.html is the landing page
// });

// // Start the server
// const port = 4500;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// const app = express();


// app.use(cors());
// app.use(express.static('public'));

// app.get('/weather', async (req, res) => {
//     try {
//         const location = 'Nairobi,KE';
//         const response = await axios.get(`${BASE_URL}/weather`, {
//             params: {
//                 q: location,
//                 units: 'metric',
//                 appid: API_KEY,
//             },
//         });

//         res.json({
//             location: response.data.name,
//             temperature: response.data.main.temp,
//             humidity: response.data.main.humidity,
//             windSpeed: response.data.wind.speed,
//         });
//     } catch (error) {
//         res.status(500).send('Error fetching weather data.');
//     }
// });

// app.listen(4500, () => console.log('Server running on http://localhost:4500'));


// dotenv.config();


// const port = 4500;

// // Middleware for parsing JSON requests
// // app.use(bodyParser.json());
// app.use(cors());
// app.use(bodyParser.json());

// // Test the database connection using sequelize.authenticate()
// sequelize.authenticate()
//   .then(() => {
//     console.log('Database connected successfully');
//   })
//   .catch(err => {
//     console.error('Error with database connection:', err);
//   });

// // Use the auth routes for authentication-related requests
// app.use('/api/auth', authRoutes);

// // Use the admin routes for admin-related requests
// app.use('/api/admin', adminRoutes); // The 'checkAdmin' middleware will be applied to these routes

// // Serve static files (like CSS, images, etc.) from the 'public' directory
// app.use(express.static('public'));

// // Serve the landing page at the root URL
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'landing-page.html'));
// });

// // Serve the registration page
// app.get('/registration', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'registration.html'));
// });

// // Serve the login page
// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'login.html'));
// });

// // Weather API Integration
// const API_KEY = 'your_openweathermap_api_key'; // Replace with your OpenWeatherMap API key
// const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// app.get('/weather', async (req, res) => {
//   try {
//     const location = 'Nairobi,KE'; // Customize for Kenya
//     const response = await axios.get(`${BASE_URL}/weather`, {
//       params: {
//         q: location,
//         units: 'metric',
//         appid: API_KEY,
//       },
//     });

//     const weather = {
//       location: response.data.name,
//       temperature: response.data.main.temp,
//       humidity: response.data.main.humidity,
//       windSpeed: response.data.wind.speed,
//     };

//     res.json(weather);
//   } catch (error) {
//     res.status(500).send('Error fetching weather data.');
//   }
// });

// // Fetch Weather Data from Backend
// async function fetchWeatherData() {
//   try {
//       const response = await fetch('/weather');
//       const data = await response.json();

//       // Update Dashboard
//       document.getElementById('location').innerText = data.location;
//       document.getElementById('temperature').innerText = data.temperature;
//       document.getElementById('humidity').innerText = data.humidity;
//       document.getElementById('wind-speed').innerText = data.windSpeed;

//       // Mock Data for Rainfall and Forecast (replace with API integration)
//       document.getElementById('rainfall').innerText = '10'; // Example mm
//       document.getElementById('forecast-data').innerText = 'Sunny with chances of rain'; // Example forecast
//   } catch (error) {
//       console.error('Error fetching weather data:', error);
//   }
// }

// // Call Function on Page Load
// document.addEventListener('DOMContentLoaded', fetchWeatherData);
// // public/script.js
// document.addEventListener('DOMContentLoaded', async () => {
//   try {
//       const response = await fetch('/weather');
//       const weatherData = await response.json();
//       console.log(weatherData);
//   } catch (error) {
//       console.error('Error fetching weather data:', error);
//   }
// });

// // Example of creating a new user
// const newUser = {
//   username: 'exampleUser',
//   password: 'password123',
//   email: 'user@example.com'
// };

// User.create(newUser)
//   .then(user => {
//     console.log('User created successfully:', user);
//   })
//   .catch(error => {
//     console.error('Error creating user:', error);
//   });

// // Sync the 'User' model with the database
// User.sync()
//   .then(() => console.log('Users table synced'))
//   .catch(err => console.error('Error syncing table:', err));

// // Protected route for admin control using checkAdmin middleware
// app.post('/admin/create', checkAdmin, (req, res) => {
//   res.send('Admin control: Create something.');
// });

// // Sync the database tables
// sequelize.sync({ force: false }) // Avoid force sync in production
//   .then(() => console.log('Database sync complete.'))
//   .catch(err => console.error('Error syncing database:', err));

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
