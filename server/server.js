const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
app.use(bodyParser.json());

// Route handlers
app.use('/api', routes);

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
