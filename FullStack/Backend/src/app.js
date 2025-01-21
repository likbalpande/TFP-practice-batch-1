require("dotenv").config();
const PORT = process.env.port || 1902;
require("../config/db.js");
require("../config/nodemailer.js");

const express = require("express");
const cors = require("cors");
const { todoRouter } = require("../api/v1/router/todoRouter.js");
const { otpRouter } = require("../api/v1/router/otpRouter.js");
const { authRouter } = require("../api/v1/router/authRouter.js");
const app = express();

// req body parse and attach to req
app.use(express.json());

// to allow the particular domain to connect to our backend
// origin--> protocoldomain
app.use(cors({ origin: "http://localhost:5173" }));

// it handles requests related to TODOs
app.use("/api/v1/todo", todoRouter);

// it handles requests related to OTP
app.use("/api/v1/otp", otpRouter);

// // it handles requests related to Auth (USER, OTP)
app.use("/api/v1/auth", authRouter);

// run the server
app.listen(1902, () => {
    console.log(`--------- Server is running on port ${PORT} ----------------`);
});
