const express = require('express');
const Joi = require('joi');

// Parse incoming request bodies in a middleware before your handlers.
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

// Employee static JSON obect
const employees = [
    {
        "id": 1,
        "name": "Samadhan",
        "email": "sam101@gmail.com",
        "mobile": "8149463443",
        "address": "Pune",
        "salary": "50000",
        "domain": [
            "Angular"
        ]
    },
    {
    "id": 2,
    "name": "Santosh",
    "email": "santosh1994@gmail.com",
    "mobile": "1111222200",
    "address": "Vimannagar pune",
    "salary": "50000",
    "domain": [
        "Java"
        ]
    },
    {
    "id": 3,
    "name": "Vivek",
    "email": "vivek123@gmail.com",
    "mobile": 1234567890,
    "address": "Bangalore",
    "salary": 35000,
    "domain": [
        "CSS"
        ]
    }
]

// Get all employees
app.get('/api/employees', (req, res) => {
    res.send(employees);
});

// Get single employee
app.get('/api/employees/:id', (req, res) => {
    const employee = employees.find(c => c.id === parseInt(req.params.id));
    if (!employee) return res.status(404).send('The employee id not found');
    res.send(employee);
});

// Post - Create new employee
app.post('/api/employee', (req, res) => {
    // Check req.body is empty
    if (!req.body) return res.sendStatus(400);

    // Validate - If Invalid return 400 - bad request 
    const { error } = validateEmployee(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const employee = {
        "id": employees.length + 1,
        "name": req.body.name,
        "email": req.body.email,
        "mobile": req.body.mobile,
        "address": req.body.address,
        "salary": req.body.salary,
        "domain": req.body.domain
    }

    employees.push(employee);
    res.send(employee);
});

// Update - Existing employee data
app.put('/api/employee/:id', (req, res) => {
    console.log('sam in PUT api', req.body);
    // Check req.body is not empty
    if (!req.body) return res.sendStatus(404);

    // Check employee id if not found return message
    const employee = employees.find(c => c.id === parseInt(req.params.id));
    if (!employee) return res.status(400).send('The employee with given id not found');

    const { error } = validateEmployee(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    employee.name = req.body.name;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.address = req.body.address;
    employee.salary = req.body.salary;
    employee.domain = req.body.domain;

    res.send(employee);
});

// Validate employee data and show warnings
function validateEmployee(request) {
    const schema = {
        name: Joi.string().min(4).required()
    }

    return Joi.validate(request, schema);
}

// Env - Assign a value to port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening port ${port} ...`))