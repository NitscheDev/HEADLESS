const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

/* Init App */
const app = express();

/* Database Connection */
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.DATABASE_URL, dbOptions, () => console.log('MongoDB Connected...'));

/* Start Server */
app.listen(process.env.SERVER_PORT, () => 
    console.log(`Server started at: http://localhost:${process.env.SERVER_PORT}`));

/* Middleware */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

/* View Engine */
app.set('view engine', 'ejs');

/* Routes */
app.use('/', require('./routes/mainRoute'));