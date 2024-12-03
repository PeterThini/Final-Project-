const jwt = require('jsonwebtoken'); // If you're using JWT for authentication

function checkAdmin(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send('Access denied. No token provided.');
  }

  try {
    // Decode token to get user info
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    // Check if user is admin
    if (req.user.isAdmin) {
      return next(); // User is admin, continue to the requested route
    } else {
      return res.status(403).send('Access denied. Admins only.');
    }
  } catch (error) {
    return res.status(400).send('Invalid token.');
  }
}

module.exports = checkAdmin;
