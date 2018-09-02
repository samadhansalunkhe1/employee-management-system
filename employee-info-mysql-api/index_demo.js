const express = require('express');
const mysql = require('mysql');

// crate connections
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database: 'employeeNodeMysql'
});

// Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Mysql connected...');
})

const app = express();

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE employeeNodeMysql';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created....');
    })
});

// Create post table first 
app.get('/createpoststable',  (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post table is created...');
    });
});

// Insert data 1
app.get('/addpostone', (req, res) => {
    let post = {title: 'Post title one', body: 'post body one'};
    let sql = 'INSERT into posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post table insert first record....')
    })
});

// Insert data 2
app.get('/addposttwo', (req, res) => {
    let post = {title: 'Post title two', body: 'post body two'};
    let sql = 'INSERT into posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post table insert second record....');
    })
});

// Select all records from posts table
app.get('/selectposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Post table selected all record....');
    });
});

// Select single record from posts table
app.get('/selectposts/:id', (req, res) => {
    let sql = `SELECT * FROM posts where id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(`Post table single record of id = ${req.params.id}`);
    });
});

// Update single record in posts table
app.get('/updateposts/:id', (req, res) => {
    let newTitle = 'New title added';
    let sql = `UPDATE posts SET title = '${newTitle}' where id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(`Post table updated single record of id = ${req.params.id}`);
    });
});

// Delete single record from posts table
app.get('/deleteposts/:id', (req, res) => {
    let sql = `DELETE from posts where id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(`Post table deleted single record of id = ${req.params.id}`);
    });
});

app.listen('3000', () => {
    console.log('Server is started on PORT 3000');
});


