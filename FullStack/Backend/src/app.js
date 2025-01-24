require("dotenv").config();
const PORT = process.env.port || 1902;
require("../config/db.js");
require("../config/nodemailer.js");

const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const { todoRouter } = require("../api/v1/router/todoRouter.js");
const { otpRouter } = require("../api/v1/router/otpRouter.js");
const { authRouter } = require("../api/v1/router/authRouter.js");
const { verifyToken } = require("../api/v1/middleware/jwtVerification.js");
const app = express();

// req body parse and attach to req
app.use(express.json());

// req cookies will be parsed
app.use(cookieParser());

// to allow the particular domain to connect to our backend
// origin--> protocoldomain
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// // it handles requests related to Auth (USER)
app.use("/api/v1/auth", authRouter);

// it handles requests related to OTP (SOMEONE can DDOS attack :: rate limiter)
app.use("/api/v1/otp", otpRouter);

// user authentication using JWT Token
app.use(verifyToken);

app.get("/api/v1/isAuthenticated", (req, res) => [
    res.json({
        status: "success",
        isAuthenticated: true,
        user: {
            email: req.userInfo.email,
            name: req.userInfo.name,
        },
    }),
]);

// it handles requests related to TODOs
app.use("/api/v1/todo", todoRouter);

// run the server
app.listen(1902, () => {
    console.log(`--------- Server is running on port ${PORT} ----------------`);
});
