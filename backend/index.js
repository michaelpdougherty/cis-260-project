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
  multipleStatements: true,
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
}).on('error', (err) => {
  throw err;
})

/**
 * Back-End Routes
 */
app.get('/patients', (req, res) => {
  con.query("SELECT * FROM PATIENTS ORDER BY LastName, FirstName ASC", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get('/patient/:id', async (req, res) => {
  const { id } = req.params;
  const returnResult = {};
  const statements = [
    'select * from patients where id = ?',
    'select * from alerts WHERE MR_NUM = ?',
    'select * from encounters WHERE MR_NUM = ?',
    'select * from patient_prevention WHERE MR_NUM = ?',
    'select * from patient_problems WHERE MR_NUM = ?',
  ];
  const sql = statements.join('; ');
  const bindings = [
    id, id, id, id, id, id, id
  ];
  con.query(sql, bindings, async (err, results) => {
    if (err) throw err;
    const responseBody = {};
    const responseKeys = [
      'patient',
      'alerts',
      'encounters',
      'patientHeader',
      'patientInfo',
      'patientPrevention',
      'patientProblems',
    ];
    await results.map(tableResult => tableResult[0]).forEach((row, i) => {
      const key = responseKeys[i];
      const rowObj = (() => {
        if (!row) return {};
        if (key !== 'patient') {
          const rowObj = {};
          Object.entries(row).forEach(([key, value]) => {
            if (key !== 'MR_NUM') {
              rowObj[key] = value;
            }
          });
          return rowObj;
        } else {
          return row;
        }
      })();
      responseBody[key] = rowObj;
    })
    res.json(responseBody);
  });
});

app.post('/api/login', (req, res) => {
  const { username, password, accountType } = req.body;
  if (!(username && password && accountType)) {
    res.send({ 'error': "missing username, password, or account type" });
  }
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