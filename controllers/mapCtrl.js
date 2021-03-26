const db = require('../models');

const index = (req, res) => {
	db.Map.find({ playerId: req.params.id }, (err, allMaps) => {
		if (err) return err;
		return res.json(allMaps);
	});
};

const show = (req, res) => {
	db.Map.findById(req.params.id, (err, foundMap) => {
		if (err) return err;
		return res.json(foundMap);
	});
};

const create = (req, res) => {
	db.Map.create(req.body, (err, newMap) => {
		if (err) return err;
		return res.json(newMap);
	});
};

const update = (req, res) => {
	db.Map.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedMap) => {
			if (err) return err;
			return res.json(updatedMap);
		}
	);
};

const destroy = (req, res) => {
	db.Map.findByIdAndDelete(req.params.id, (err, deletedMap) => {
		if (err) return err;
		return res.json(deletedMap);
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
