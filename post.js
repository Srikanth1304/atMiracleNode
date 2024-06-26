// Import the Express module
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of an Express application
const app = express();

// Use body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a port to listen to
const port = 3000;

// Define a route for the root URL ('/') and a callback function to handle the request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a route to handle POST requests to '/submit'
app.post('/submit', (req, res) => {
  const data = req.body;
  res.send(`Data received: ${JSON.stringify(data)}`);
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
