// BY PEREZ MOTA JAVIER


const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const etagesRoutes = require('./routes/etages');

// settings
app.set('json spaces', 4);

// midlewares 
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// routes
app.use('/etages', etagesRoutes);
// static files

// start server
app.listen(8019, () => {
    console.log('Server on Port', 8019);

});