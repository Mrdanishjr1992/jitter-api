require('dotenv').config();
const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const routes = require('./routes');
const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());

// Cross Origin Resource Sharing
app.use(cors());

// Home Route
app.get('/', (req, res) => {
	res.send('<h1>Jitter</h1>');
});
// Chat Route
app.use('/chat', routes.chat);
// Group Route
app.use('/group', routes.group);
// Mesaage Route
app.use('/message', routes.message);
// User Route
app.use('/user', routes.user);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

module.exports = app;
