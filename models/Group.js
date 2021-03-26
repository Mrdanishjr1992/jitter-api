const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			minLength: 1,
			maxLength: 200,
		},
		topic: {
			type: String,
			required: true,
			trim: true,
			minLength: 1,
			maxLength: 200,
		},
		admin: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
				required: true,
			},
		],
		participants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		messages: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Message',
			},
		],
	},
	{ timestamps: true }
);

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
