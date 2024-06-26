const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// Use body-parser to parse JSON data sent in the request body
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
const port = 8000;

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'M1racle@123', // replace with your MySQL root password
  database: 'Node'
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Define a route to handle POST requests to '/signup'
app.post('/emp', (req, res) => {
  const data = req.body;

  // SQL query to insert data into the users table
  const query = 'INSERT INTO Emp (eId,eName,eDepart,eSal) VALUES (?,?,?,?)';
  db.query(query, [data.eId, data.eName,data.eDepart,data.eSal], (err, result) => {
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
