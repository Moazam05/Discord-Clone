const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/register", authController.controllers.register);

router.post("/login", authController.controllers.login);

module.exports = router;
