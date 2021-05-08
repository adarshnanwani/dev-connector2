const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Route
const authRoute = require('./routes/api/auth');
const postsRoute = require('./routes/api/posts');
const profileRoute = require('./routes/api/profile');
const usersRoute = require('./routes/api/users');

app.get('/', (req, res) => res.send('DevConnector API running.'));

// Mount Route
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/profile', profileRoute);
app.use('/api/posts', postsRoute);

// Setup port number
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
