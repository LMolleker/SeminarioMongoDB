const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config'); //To hide the data of the connection
const bodyParser = require('body-parser');

//Import routes
const productsRoute = require("./routes/productsRoutes");
const salesRoute = require('./routes/salesRoute');

//Middleware (block of code that executes between the request of the user and the server)
app.use(bodyParser.json());
//When the URL starts with 'products' i go to the products route
app.use('/products', productsRoute);
//When the URL starts with 'sales' i go to the sales route
app.use('/sales', salesRoute);

//Connection to mongo
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true });

//Port used
app.listen(8080);