const db = require('../models');

const index = (req, res) => {
	db.Message.find({}, (err, allMessages) => {
		if (err) return err;
		// Send back data as JSON object
		return res.json(allMessages);
	});
};

const show = (req, res) => {
	db.Message.findById(req.params.id, (err, foundMessage) => {
		if (err) return err;
		// Send back data to client as JSON object
		return res.json(foundMessage);
	});
};

const create = (req, res) => {
	db.Message.create(req.body, (err, newMessage) => {
		if (err) return err;
		db.User.findByIdAndUpdate(
			req.body.userId,
			{
				$push: { messages: [newMessage._id] },
			},
			{ new: true },
			(err, updatedUser) => {
				if (err) return err;
				return res.json(newMessage);
			}
		);
	});
};

const update = (req, res) => {
	db.Message.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedMessage) => {
			if (err) return err;
			return res.json(updatedMessage);
		}
	);
};

const destroy = (req, res) => {
	db.Message.findByIdAndDelete(req.params.id, (err, deletedMessage) => {
		if (err) return err;
		return res.json(deletedMessage);
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
