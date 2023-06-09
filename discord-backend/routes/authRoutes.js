const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const registerSchema = Joi.object({
	username: Joi.string().min(3).max(12).required(),
	password: Joi.string().min(6).max(12).required(),
	email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(6).max(12).required(),
});

router.post(
	"/register",
	validator.body(registerSchema),
	authController.controllers.register
);
router.post(
	"/login",
	validator.body(loginSchema),
	authController.controllers.login
);

// test to verify if our middleware is working
router.get("/test", auth, (req, res) => {
	res.send("request passed");
});

module.exports = router;
