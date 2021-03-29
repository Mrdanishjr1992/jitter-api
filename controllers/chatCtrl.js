const db = require('../models');

const index = (req, res) => {
	db.Chat.find({}, (err, allChats) => {
		if (err) return err;
		// Send back data as JSON object
		return res.json(allChats);
	});
};

const show = (req, res) => {
	db.Chat.findById(req.params.id, (err, foundChat) => {
		if (err) return err;
		// Send back data to client as JSON object
		return res.json(foundChat);
	});
};

const create = (req, res) => {
	db.Chat.create(req.body, (err, newChat) => {
		if (err) return err;
		db.User.findByIdAndUpdate(
			req.body.user,
			{
				$push: { chats: newChat._id },
			},
			{ new: true },
			(err, updatedUser) => {
				if (err) return err;
				return res.json(newChat);
			}
		);
	});
};

const update = (req, res) => {
	db.Chat.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedChat) => {
			if (err) return err;
			return res.json(updatedChat);
		}
	);
};

const destroy = (req, res) => {
	db.Chat.findByIdAndDelete(req.params.id, (err, deletedChat) => {
		if (err) return err;
		db.User.findByIdAndUpdate(
			req.body.user,
			{
				$pull: { chats: deletedChat._id },
			},
			{ new: true },
			(err, updatedUser) => {
				if (err) return err;
				return res.json(deletedChat);
			}
		);
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
