// Express.js App Framework
const express = require('express');
const app = express();
app.use(express.json());
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
});

/**
 * Back-End Routes
 */
app.get('/patients', (req, res) => {
  con.query("SELECT * FROM PATIENTS", (err, result) => {
    if (err) throw err;
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json(result);
  });
});

app.post('/login', (req, res) => {
  const { username, password, accountType } = req.body;
  if (!['student', 'teacher', 'admin'].includes(accountType.toLowerCase())) {
    res.send({ 'error': "`accountType` must be one of ['student', 'teacher', 'admin']"}, 400);
  }
  con.query(`SELECT password FROM users WHERE username = '${username}' AND account_type = '${accountType}'`, (err, result) => {
    if (err) throw err;
    if (result.length === 1) {
      const { password: dbPassword } = result[0];
      if (password === dbPassword) {
        res.send(200);
      } else {
        res.send(401);
      }
    } else {
      res.send(401);
    }
  });
});