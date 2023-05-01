const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Local Imports
const User = require("../models/user");

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		console.log("req", req);

		const user = await User.findOne({ email: email.toLowerCase() });

		if (user && bcrypt.compare(password, user.password)) {
			// send new token

			const token = "JWT token";

			return res.status(200).send({
				userDetails: {
					email: user.email,
					token: token,
					password: user.password,
				},
			});
		}

		return res.status(400).send("Invalid Credentials");
	} catch (error) {
		return res.status(500).send("Something went wrong. Please try again");
	}
};

module.exports = login;
