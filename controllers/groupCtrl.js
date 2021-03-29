const db = require('../models');

const index = (req, res) => {
	db.Group.find({}, (err, allGroups) => {
		if (err) return err;
		// Send back data as JSON object
		return res.json(allGroups);
	});
};

const show = (req, res) => {
	db.Group.findById(req.params.id, (err, foundGroup) => {
		if (err) return err;
		// Send back data to client as JSON object
		return res.json(foundGroup);
	});
};

const create = (req, res) => {
	db.Group.create(req.body, (err, newGroup) => {
		if (err) return err;
		db.User.findByIdAndUpdate(
			req.body.user,
			{
				$push: { groups: newGroup._id },
			},
			{ new: true },
			(err, updatedUser) => {
				if (err) return err;
				return res.json(newGroup);
			}
		);
	});
};

const update = (req, res) => {
	db.Group.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedGroup) => {
			if (err) return err;
			return res.json(updatedGroup);
		}
	);
};

const destroy = (req, res) => {
	db.Group.findByIdAndDelete(req.params.id, (err, deletedGroup) => {
		if (err) return err;
		db.User.findByIdAndUpdate(
			req.body.user,
			{
				$pull: { groups: deletedGroup._id },
			},
			{ new: true },
			(err, updatedUser) => {
				if (err) return err;
				return res.json(deletedGroup);
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
