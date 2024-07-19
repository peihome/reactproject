const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

//Middlewares
require('../controllers/apolloServer')(app);

app.listen(port, function () {
    console.log(`http://localhost:${port}/graphql`);
});