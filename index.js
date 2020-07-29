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
    const sqlOfDay = "CREATE TABLE quoteOfDay (_id INT PRIMARY KEY AUTO_INCERMENT, id VARCHAR(255), quote VARCHAR(255), author VARCHAR(255))";
    
    // const sql = "CREATE TABLE users (id int PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255), password VARCHAR(255))";
    
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });
    
  });



app.get('/fav', (req, res) => {
    console.log('Get request worked!');
     let queryStr = "SELECT * FROM favorites";
    con.query(queryStr, function (err, results) {
      if (err)  {
    res.status(404);
        console.log(err);
      } else {
        console.log(results);
        res.status(200);
        res.send(results);
      }
    });
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


//PUT
app.post('/postQuoteDay', (req, res) => {
    console.log('Get post worked!');
    
    console.log(req.body, 77);
       con.query("DELETE FROM quoteOfDay", (err, results) => {
        if(err){
            console.log(err);
        }else{
            console.log('success', results)
        }
    });
    let queryStr = `INSERT INTO quoteOfDay  (id, quote, author) VALUES ('${req.body._id}', "${req.body.quoteText}", '${req.body.quoteAuthor}')`;
      con.query(queryStr, function (err, results) {
        if (err)  {
      res.status(404);
          console.log(err);
        } else {
          console.log(results, 888888);
          res.status(201);
        }
      });
    //   let qStr = "SELECT * FROM quoteOfDay";
      console.log(95)
      con.query("SELECT * FROM quoteOfDay", function (err, results) {
          console.log
          if(err){
              console.log(error, 7777)
              res.send(err)
              return
          }

              console.log(results[0], 'dude');
              res.send(results[0]);
          
        });
    })
//DELETE
      app.delete('/delete', (req, res) => {
        console.log('DELETE REQUEST worked!');
        console.log(req.body, 99);
        let queryStr = `DELETE FROM favorites WHERE id='${req.body.id}'`;
          con.query(queryStr, function (err, results) {
            if (err)  {
          res.status(404);
              console.log(err);
            } else {
              console.log(results, 888);
              res.status(201);
              res.send(results);
            }
          });
        });

//UPDATE
app.post('/update', (req, res) => {
    console.log(req.body, 1277777);

    let updateStr = `UPDATE quoteOfDay SET id = "${req.body.id}", quote = "${req.body.quote}", author = "${req.body.author}" LIMIT 1`;
 
      con.query(updateStr, function (err, results) {
        if (err)  {
      res.status(404);
          console.log(err);
        } else {
          console.log(results, 'henny it worked!');
          
         
        }
      });

      con.query("SELECT * FROM quoteOfDay", function (err, results) {
        console.log
        if(err){
            console.log(error, 7777)
            res.send(err)
            return
        }
            console.log(results[0], 'dude');
      
            res.send(results[0]);
        
      });

 
 
});






app.listen(PORT, () => {
  console.log(`Server listeing on ${PORT}`);
});
