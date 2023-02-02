const mysql = require('mysql');
require('dotenv').config();

const con = mysql.createConnection({
  host: "cis260db.cwv0o9vfnwsc.us-east-1.rds.amazonaws.com",
  user: process.env.DATABASE_USER,
  password: "ookay123",
  database: 'CIS260db',
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM PATIENTS", (err, result) => {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result, null, 4));
  });
});
