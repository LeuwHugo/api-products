const express = require('express');
require('dotenv').config();
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

// Import routes
const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

// Use the error handler middleware
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
