const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const createError = require('http-errors'); // Add this line
require('dotenv').config();

const connectToDatabase = require('./config/db');
const interfaceRoutes = require('./routes/interfaceRoutes');
const linedPaperRoutes = require('./routes/linedPaperRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
connectToDatabase();

// Routes
app.get('/', (req, res) => {
  res.json('is alive');
});

// Use action names in the routes
app.use('/interfaces', interfaceRoutes);
app.use('/lined-papers', linedPaperRoutes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404, 'Not Found'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof createError.HttpError) {
    res.status(err.status).json({ error: err.message });
  } else {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
