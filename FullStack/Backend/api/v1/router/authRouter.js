const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/signup", registerUser);
authRouter.post("/login", loginUser);

module.exports = { authRouter };
