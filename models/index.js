const mongoose = require('mongoose');

const connectionString =
	process.env.MONGODB_URI || 'mongodb://localhost:27017/jitter';

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
	Chat: require('./Chat'),
	Group: require('./Group'),
	Message: require('./Message'),
	User: require('./User'),
};
