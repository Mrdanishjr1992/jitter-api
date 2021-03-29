const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
	{
		body: {
			type: String,
			required: true,
			trim: true,
			minLength: 1,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		group: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Group',
		},
		chat: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Chat',
		},
	},
	{ timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
