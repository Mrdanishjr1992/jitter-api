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
// User API Routes
app.use('/user', routes.user);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.send('error');
});

module.exports = app;
