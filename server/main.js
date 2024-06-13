const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'));

//Middlewares
require('../controllers/apolloServer')(app);

app.listen(port, function () {
    console.log('http://localhost:3000');
});