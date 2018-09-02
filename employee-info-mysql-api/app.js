const express = require('express');
const mysql = require('mysql');

// Parse incoming request bodies in a middleware before your handlers.
const bodyParser = require('body-parser');
// const Joi = require('joi');

const app = express();

app.use(bodyParser.json());

// Create connections
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'empInfoMysqlDB'
});

// Connect DB
db.connect((err) => {
    if (err) throw err;
    console.log('Mysql connection created...');
});

// Create DB sql query
app.get('/createEmpInfoDB', (req, res) => {
    let query = 'CREATE DATABASE empInfoMysqlDB';
    db.query(query, (err, result) => {
       if (err) throw err;
       console.log(result);
       res.send('Employee info DB created...')
    });
});

app.get('/createTableStoreEmployee', (req, res) => {
    let query = 'CREATE TABLE storeEmployee(id INT AUTO_INCREMENT, name VARCHAR(255), mobile INT(11), email VARCHAR(255), address VARCHAR(255), salary INT(11), domain VARCHAR(255), PRIMARY KEY(id))';
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Table created storeEmployee.... ');
    });
});

// GET - Get all employee list of records
app.get('/api/employees', (req, res) => {
    let query = 'SELECT * FROM storeEmployee';
    db.query(query, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});

// GET - Get single employee record
app.get('/api/employees/:id', (req, res) => {
    let query = `SELECT * FROM storeEmployee WHERE id = ${req.params.id}`;
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result[0]);
    });
});

// Insert - Add new employee record
app.post('/api/employee', (req, res) => {
    console.log('sam in post api', req.body);
    let employee = {
        "name": req.body.name,
        "mobile": req.body.mobile,
        "email": req.body.email,
        "address": req.body.address,
        "salary": req.body.salary,
        "domain": req.body.domain
    }

    let query = 'INSERT into storeEmployee SET ?';
    db.query(query, employee, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(employee);
    });
});

// Update - Update employee record
app.put('/api/employee/:id', (req, res) => {
    let query = `UPDATE storeEmployee SET name = '${req.body.name}' where id = ${req.params.id}`;
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

// Delete employee record
app.delete('/api/employee/:id', (req, res) => {
    let query = `DELETE from storeEmployee where id = ${req.params.id}`;
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

// Create serve connections...
app.listen('3000', () => {
    console.log('Server is stared on PORT 3000');
});