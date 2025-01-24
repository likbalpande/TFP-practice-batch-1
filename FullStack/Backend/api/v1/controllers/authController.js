const bcrypt = require("bcrypt");
const { OTP } = require("../../../models/otpModel");
const { User } = require("../../../models/userModel");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const { email, name, password, otp: userOtp } = req.body;
        if (!email || !name || !password || !userOtp) {
            res.status(400).json({
                status: "fail",
                message: "Name, email, password and OTP are required !",
            });
            return;
        }

        const result = await OTP.findOne({ email, createdAt: { $gte: Date.now() - 10 * 60 * 1000 } }).sort(
            "-createdAt"
        );

        const { otp: dbOtp } = result || {};

        if (!dbOtp) {
            res.status(401).json({
                status: "fail",
                message: "OTP is expired. Please try Resend!",
            });
            return;
        }

        const isOTPCorrect = await bcrypt.compare(userOtp, dbOtp);
        if (!isOTPCorrect) {
            res.status(401).json({
                status: "fail",
                message: "Invalid Email or OTP",
            });
            return;
        }

        // hashing
        const salt = await bcrypt.genSalt(16);
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            status: "success",
            message: "User created",
        });
    } catch (err) {
        if (err.code == "11000") {
            res.status(409).json({
                status: "fail",
                message: "Duplicate key error on: " + Object.keys(err.keyValue).join(","),
            });
            return;
        }
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error!",
        });
        console.log(err.message);
    }
};

const loginUser = async (req, res) => {
    // email, password
    const { email, password: userPassword } = req.body;

    // find db user with that email
    const user = await User.findOne({ email }).select("name email password");

    if (!user) {
        res.status(400).json({
            status: "fail",
            message: "Email is not registered. Please sign up.",
        });
        return;
    }

    // password match
    const { password: hashedPassword, name } = user;
    const isPasswordCorrect = await bcrypt.compare(userPassword, hashedPassword);

    if (!isPasswordCorrect) {
        res.status(401).json({
            status: "fail",
            message: "Email or password is incorrect",
        });
        return;
    }

    const token = jwt.sign({ email, name }, process.env.jwt_secret_key, { expiresIn: 10 * 60 }); // 10 minute

    res.cookie("token", token, {
        sameSite: "None",
        secure: true,
        httpOnly: true,
        maxAge: 900000, // Expires in 15 minutes
        // sameSite: "Lax",
        // httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
        // secure: true, // Only send the cookie over HTTPS (use in production)
    }); // "authorization" : "Bearer <token>"

    res.cookie("server-time", "hello", {
        sameSite: "None",
        secure: true,
        httpOnly: false,
        maxAge: 900000,
    });

    res.status(200).json({
        status: "success",
        message: "Done",
        data: {
            user: {
                email,
                name,
            },
        },
    });

    // response
};

module.exports = { registerUser, loginUser };
