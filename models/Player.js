const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		gender: {
			type: String,
			required: true,
		},
		bio: {
			type: String,
			required: true,
		},
		// level: {
		// 	type: Number,
		// 	required: true,
		// },
		// stats: {
		// 	health: {
		// 		type: Number,
		// 		required: true,
		// 	},
		// 	attack: {
		// 		type: Number,
		// 		required: true,
		// 	},
		// 	defence: {
		// 		type: Number,
		// 		required: true,
		// 	},
		// 	exp: {
		// 		type: Number,
		// 		required: true,
		// 	},
		// },
		// attacks: [
		// 	{
		// 		type: mongoose.Schema.Types.ObjectId,
		// 		ref: 'Attack',
		// 	},
		// ],
		userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	},
	{ timestamps: true }
);

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
