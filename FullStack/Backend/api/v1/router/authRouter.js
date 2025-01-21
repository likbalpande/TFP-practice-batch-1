const express = require("express");
const { registerUser } = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/signup", registerUser);

module.exports = { authRouter };
