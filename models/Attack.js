const mongoose = require('mongoose');

const attackSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			minLength: 1,
			maxLength: 200,
		},
		power: {
			type: Number,
			required: true,
		},
		accuracy: {
			type: Number,
			required: true,
		},
		playerId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Player',
		},
	},
	{ timestamps: true }
);

const Attack = mongoose.model('Attack', attackSchema);

module.exports = Attack;
