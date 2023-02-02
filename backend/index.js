// Express.js App Framework
const express = require('express');
const app = express();
// Environment variables
require('dotenv').config();

// Database
const mysql = require('mysql');
const con = mysql.createConnection({
  host: process.env.DATABASE_HOSTNAME, 
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

// Connect to database
con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

// Configure application
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/**
 * Back-End Routes
 */
app.get('/patients', (req, res) => {
  con.query("SELECT * FROM PATIENTS", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
})

