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
  const returnResult = {};
  const statements = [
    'select * from alerts where mrn = ?',
    'select * from encounters where mrn = ?',
    'select * from labs where mrn = ?',
    'select * from meds where mrn = ?',
    'select * from notes where mrn = ?',
    'select * from orders where mrn = ?',
    'select * from patient_prevention where mrn = ?',
    'select * from patient_problems where mrn = ?',
    'select * from patients where mrn = ?',
    'select * from vitals where mrn = ?',
  ];
  const sql = statements.join('; ');
  const bindings = statements.map(() => id);
  con.query(sql, bindings, async (err, results) => {
    if (err) throw err;
    const responseBody = {};
    const responseKeys = [
      'alerts',
      'encounters',
      'labs',
      'meds',
      'notes',
      'orders',
      'patientPrevention',
      'patientProblems',
      'patient',
      'vitals',
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

app.get('/api/notes/:mrn', (req, res) => {
  const { mrn } = req.params;
  con.query("SELECT * FROM notes", async (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/api/notes', (req, res) => {
    console.log("Received request at /api/notes");
    console.log(req.body);
    const {
        mrn,
        date,
        summary,
        author,
        jsonData,
    } = req.body;

    con.query(
           'insert into notes (' +
               '`mrn`,' +
               '`date`,' +
               '`summary`,' +
               '`author`,' +
               '`jsonData`' +
           ') VALUES (' +
                '?,' +
                '?,' +
                '?,' +
                '?,' +
                '?' +
            ')',
            [
                mrn,
                date,
                summary,
                author,
                JSON.stringify(jsonData),
            ],
            (err, result) => {
                if (err) throw err;
                res.send({
                    success: true,
                    note: {
                        mrn,
                        date,
                        summary,
                        author,
                        jsonData,
                    }
                });
    });
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
