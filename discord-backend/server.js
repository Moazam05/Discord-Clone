const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json()); // for parsing application/json
app.use(cors()); // for cors

// register the routes
app.use("/api/auth", authRoutes);

const server = http.createServer(app);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		server.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.log("database connection failed. Server not started");
		console.error(err);
	});
