const mysql = require('mysql');
require('dotenv').config();

const con = mysql.createConnection({
  host: process.env.DATABASE_HOSTNAME, 
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM PATIENTS", (err, result) => {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result, null, 4));
  });
});
