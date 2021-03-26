const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			minLength: 1,
			maxLength: 200,
		},
		password: {
			type: String,
			required: true,
			trim: true,
			minLength: 1,
			maxLength: 200,
		},
		players: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Player',
			},
		],
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
