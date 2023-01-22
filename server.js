const express = require('express');
const mysql = require('mysql2');


const app = express();
const port = 7070;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'industry',
  password: 'kellyakacj1234$',


});
db.connect()

app.get('/', (req, res)=>{

    const getall = 'Select * from private';
    db.query(getall, (error, result)=>{
        if(error) throw error
        res.status(200).json(result)

    })

    

})


app.listen(port, (req, res)=>{
    console.log('we are live on ' + port);
})