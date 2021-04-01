const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/index');

async function create(req, res) {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.json({ status: 400, message: 'All Fields Are Required' });
	}
	// Async/Await Version
	try {
		const foundUser = await db.User.findOne({ email });

		if (foundUser) {
			return res.json({
				status: 400,
				error: 'User already exists. Please login',
			});
		}

		// Create Salt for password hash
		const salt = await bcrypt.genSalt(10);
		// Hash user plain text password
		const hash = await bcrypt.hash(password, salt);

		const newUser = await db.User.create({ email, password: hash });

		// Respond back to client
		res.json(newUser);
	} catch (err) {
		return res.json({
			status: 500,
			error: 'Something went wrong. Please try again',
		});
	}
}

async function show(req, res) {
	try {
		// currentUserId = req.currentUserId
		// Findy User by ID
		const user = await db.User.findById(req.currentUserId);
		return res.json({ status: 200, profile: user });
	} catch (err) {
		return res
			.status(500)
			.json({ status: 500, error: 'Something went wrong. Please try again' });
	}
}

async function login(req, res) {
	const { email, password } = req.body;
	// Return error if no form data
	if (!email || !password) {
		return res
			.status(400)
			.json({ status: 400, error: 'All fields are required' });
	}

	try {
		// Find user by email
		const user = await db.User.findOne({ email });
		if (!user) {
			res
				.status(400)
				.json({ status: 400, error: 'Invalid credentials. Please try again' });
		}

		// Verify supplied password matches found user password
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res
				.status(400)
				.json({ status: 400, error: 'Invalid credentials. Please try again' });
		}

		// Create a jwt with userId
		const payload = { userId: user._id };
		const secret = process.env.JWT_SECRET;
		const expiration = { expiresIn: '2d' };

		// Sign the jwt
		const token = await jwt.sign(payload, secret, expiration);

		res.json({ status: 200, token });
	} catch (err) {
		return res
			.status(500)
			.json({ status: 500, error: 'Something went wrong. Please try again' });
	}
}
const update = (req, res) => {
	try {
		db.User.findByIdAndUpdate(
			req.currentUserId,
			req.body,
			{ new: true },
			(err, updatedUser) => {
				return res.json({ status: 200, profile: updatedUser });
			}
		);
	} catch (err) {
		return res
			.status(500)
			.json({ status: 500, error: 'Something went wrong. Please try again' });
	}
};

const destroy = (req, res) => {
	try {
		db.User.findByIdAndDelete(req.currentUserId, (err, deletedUser) => {
			return res.json({ status: 200, profile: deletedUser });
		});
	} catch (err) {
		return res
			.status(500)
			.json({ status: 500, error: 'Something went wrong. Please try again' });
	}
};

async function verify(req, res) {
	res.json({ status: 200, userId: req.currentUserId });
}
module.exports = {
	create,
	show,
	login,
	verify,
	update,
	destroy,
};
