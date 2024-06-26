const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express()
app.use(bodyParser.json());

const port = 3000;

app.post('/Emp1', (req, res) => {
  const data = req.body;
  const query = 'INSERT INTO Emp (eId, eName, eDepart, eSal) VALUES (?, ?, ?, ?)';

  db.getConnection((err, connection) => {
    if (err) {
      res.status(500).send('Error getting database connection');
      throw err;
    }
    connection.query(query, [data.eId, data.eName, data.eDepart, data.eSal], (err, result) => {
      connection.release(); // Release the connection back to the pool
      if (err) {
        res.status(500).send('Error saving data to database');
        throw err;
      }
      res.send('Data saved to database');
    });
  });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
