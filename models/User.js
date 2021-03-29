const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		email: {
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
		info: {
			firstname: {
				type: String,
				trim: true,
				minLength: 1,
				maxLength: 200,
			},
			lastname: {
				type: String,
				trim: true,
				minLength: 1,
				maxLength: 200,
			},
			dob: {
				type: String,
				trim: true,
				minLength: 1,
				maxLength: 200,
			},
		},
		friends: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		blocked: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		groups: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Group',
			},
		],
		chats: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Chat',
			},
		],
		messages: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Message',
			},
		],
		likes: {
			groups: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Group',
				},
			],
			messages: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Message',
				},
			],
		},
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
