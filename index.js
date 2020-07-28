require('dotenv').config();
const { PORT } = process.env;
const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "mydb"
});


  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    const sql = "CREATE TABLE favorites (id VARCHAR(255), quote VARCHAR(255), author VARCHAR(255))";
    
    // const sql = "CREATE TABLE users (id int PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255), password VARCHAR(255))";
    
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });
    
  });



app.get('/', () => {
    console.log('Get request worked!');
});

app.post('/post', (req, res) => {
    console.log('Get post worked!');
    console.log(req.body);
    let queryStr = `INSERT INTO favorites (id, quote, author) VALUES ('${req.body._id}', "${req.body.quote}", '${req.body.quoteAuthor}')`;
      con.query(queryStr, function (err, results) {
        if (err)  {
      res.status(404);
          console.log(err);
        } else {
          console.log(results);
          res.status(201);
        }
      });


    res.status(201)
    res.send('Post request was successful')
 
 
});


app.listen(PORT, () => {
  console.log(`Server listeing on ${PORT}`);
});
