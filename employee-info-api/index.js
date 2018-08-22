const express = require('express');
const app = express();

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'application/json')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

const employees = [
    {
        "id": 1,
        "name": "Samadhan",
        "email": "sam101@gmail.com",
        "mobile": 8149463443,
        "address": "Pune",
        "salary": 50000,
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

app.post('/api/employee', (req, res) => {
    console.log('sam in api');
    console.log(req.body);
    // const employee = {
    //     "id": employees.length + 1,
    //     "name": req.body.name,
    //     "email": req.body.email,
    //     "mobile": req.body.mobile,
    //     "address": req.body.address,
    //     "salary": req.body.salary,
    //     "domain": req.body.domain
    // }

    // employees.push(employee);
    // res.send(employee);
})


// Env - Assign a value to port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening port ${port} ...`))