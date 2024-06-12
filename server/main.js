// Connect to MongoDB
require('../controllers/mongoDBConnect');

const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(3000, function () {
    console.log('http://localhost:3000');
});

//Middlewares
require('../controllers/apolloServer')(app);

//Controllers
const employeeController = require('../controllers/employeeController');

// **************************** GET Request Starts ****************************** //

// Employee List Page
app.get("/employee", employeeController);


// **************************** POST Request Starts ****************************** //

// Employee List Page
app.post("/employee", employeeController);


// **************************** PUT Request Starts ****************************** //

// Employee List Page
app.put("/employee/:id", employeeController);