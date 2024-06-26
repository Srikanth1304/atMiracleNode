const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const connection=require('./db');
const app = express();
const port = 3000;

// Use body-parser to parse JSON data sent in the request body
app.use(bodyParser.json());



// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});




// Define a route to handle POST requests to '/signup'
app.post('/emp', (req, res) => {

  const data = req.body;  //data keeps the body 

  // SQL query to insert data into the users table
  const query = 'INSERT INTO Emp (eId, eName,eDepart,eSal) VALUES (?,?,?,?)';
  db.query(query, [data.eId, data.eName,data.eDepart, data.eSal], (err, result) => {
    if (err) {
      res.status(500).send('Error saving data to database');
      throw err;
    }
    res.send('Data saved to database');
  });
});





app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
