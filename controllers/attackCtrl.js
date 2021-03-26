const db = require('../models');

const index = (req, res) => {
	db.Attack.find({ userId: req.params.userId }, (err, allAttacks) => {
		if (err) return err;
		return res.json(allAttacks);
	});
};

const show = (req, res) => {
	db.Attack.findById(req.params.id, (err, foundAttack) => {
		if (err) return err;
		return res.json(foundAttack);
	});
};

const create = (req, res) => {
	db.Attack.create(req.body, (err, newAttack) => {
		if (err) return err;
		return res.json(newAttack);
	});
};

const update = (req, res) => {
	db.Attack.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedAttack) => {
			if (err) return err;
			return res.json(updatedAttack);
		}
	);
};

const destroy = (req, res) => {
	db.Attack.findByIdAndDelete(req.params.id, (err, deletedAttack) => {
		if (err) return err;
		return res.json(deletedAttack);
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
