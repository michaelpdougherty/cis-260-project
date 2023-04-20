// Express.js App Framework
const express = require('express');
const app = express();
app.use(express.json());
// Environment variables
require('dotenv').config();

// Database
const mysql = require('mysql2');
const con = mysql.createConnection({
  host: process.env.DATABASE_HOSTNAME, 
  user: process.env.DATABASE_USER,
  port: process.env.DATABASE_PORT ?? 3306,
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
  con.query("SELECT * FROM patients ORDER BY lastName, firstName ASC", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get('/patient/:id', async (req, res) => {
  const { id } = req.params;
  const statements = [
    //'select * from alerts where mrn = ?',
    //'select * from encounters where mrn = ?',
    'select * from imaging where mrn = ?',
    'select * from labs where mrn = ?',
    //'select * from meds where mrn = ?',
    'select * from notes where mrn = ?',
    'select * from orders where mrn = ?',
    //'select * from patient_prevention where mrn = ?',
    //'select * from patient_problems where mrn = ?',
    'select * from patients where mrn = ?',
    'select * from vitals where mrn = ?',
  ];
  const sql = statements.join('; ');
  const bindings = statements.map(() => id);
  con.query(sql, bindings, async (err, results) => {
    if (err) throw err;
    const responseKeys = [
      //'alerts',
      //'encounters',
      'imaging',
      'labs',
      //'meds',
      'notes',
      'orders',
      //'patientPrevention',
      //'patientProblems',
      'patient',
      'vitals',
    ];
    const body = {};
    results.forEach((arr, i) => {
      const currentTable = responseKeys[i];
      if (currentTable === 'patient') {
        body[currentTable] = arr[0];
      } else {
        body[currentTable] = arr;
      }
    })
    res.json(body);
  });
});

app.get('/api/notes/:mrn', (req, res) => {
  const { mrn } = req.params;
  con.query("SELECT * FROM notes WHERE mrn = ?", [mrn], async (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/api/orders', (req, res) => {
  const {
    order,
    mrn
  } = req.body;

  res.json({
    message: 'You win!',
  })
})

app.post('/api/notes', (req, res) => {
    console.log("Received request at /api/notes");
    console.log(req.body);
    const {
        mrn,
        userId,
        type,
        jsonData,
    } = req.body;
    const {
      date,
      author,
      summary,
    } = jsonData;
    try {
    con.query(
      'insert into notes (' +
          '`mrn`,' +
          '`date`,' +
          '`type`,' +
          '`summary`,' +
          '`author`,' +
          '`user_id`,' +
          '`jsonData`' +
      ') VALUES (' +
          '?,' +
          '?,' +
          '?,' +
          '?,' +
          '?,' +
          '?,' +
          '?' +
      ')',
      [
          mrn,
          date,
          type,
          summary,
          author,
          userId,
          JSON.stringify(jsonData),
      ],
      (err, result) => {
          if (err) throw err;
          res.json({
              success: true,
              note: {
                  mrn,
                  userId,
                  date,
                  type,
                  jsonData,
                  summary,
                  author,
              }
          });
    });
  } catch (err) {
    res.json({
      success: false,
      error: err,
    })
  }
});

app.post('/api/login', (req, res) => {
  const { username, password, accountType } = req.body;
  if (!(username && password && accountType)) {
    return res.send({ 'error': "missing username, password, or account type" });
  }
  if (!['student', 'teacher', 'admin'].includes(accountType.toLowerCase())) {
    return res.send({ 'error': "`accountType` must be one of ['student', 'teacher', 'admin']"}, 400);
  }
  con.query(`SELECT password FROM users WHERE username = ? AND account_type = ?`, [username, accountType], (err, result) => {
    if (err) throw err;
    if (result.length === 1) {
      const { password: dbPassword } = result[0];
      if (password === dbPassword) {
        con.query(`SELECT * FROM users WHERE username = ? AND account_type = ?`, [username, accountType], (err, result) => {
          res.send(result[0], 200);
        });
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(401);
    }
  });
});

/*
app.get('/api/user/:username', (req, res) => {
  con.query(`SELECT * FROM users WHERE username = '${username}' AND account_type = '${accountType}'`, (err, result) => {

  });
})
*/
