const mongoose = require('mongoose');

const connectionString =
	process.env.MONGODB_URI || 'mongodb://localhost:27017/jitter-api';

mongoose
	.connect(connectionString, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB connected successfully'))
	.catch((err) => console.log(err));

module.exports = {
	Attack: require('./Attack'),
	Player: require('./Player'),
	User: require('./User'),
	Map: require('./Map'),
};
