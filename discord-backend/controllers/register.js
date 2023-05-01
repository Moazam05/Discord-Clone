const bcrypt = require("bcryptjs");
// Local Imports
const User = require("../models/user");

const register = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		// check is user exists
		const userExists = await User.exists({ email: email.toLowerCase() });

		if (userExists) {
			return res.status(409).send("Email already taken");
		}

		// encrypt password
		const encryptedPassword = await bcrypt.hash(password, 10);

		// create user document and save in database
		const user = await User.create({
			username,
			email: email.toLowerCase(),
			password: encryptedPassword,
		});

		// create JWT token
		const token = "JWT token";

		res.status(201).json({
			userDetails: {
				email: user.email,
				token: token,
				username: user.username,
			},
		});
	} catch (error) {
		return res.status(500).send("Error occurred. Please try again");
	}
};

module.exports = register;
