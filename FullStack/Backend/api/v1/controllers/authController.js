const bcrypt = require("bcrypt");
const { OTP } = require("../../../models/otpModel");
const { User } = require("../../../models/userModel");

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

        const result = await OTP.findOne({ email });
        const { otp: dbOtp } = result || {};

        const isOTPCorrect = await bcrypt.compare(userOtp, dbOtp);
        console.log("🟡 : dbOtp:", dbOtp);
        console.log("🟡 : userOtp:", userOtp);
        console.log("🟡 : isOTPCorrect:", isOTPCorrect);
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
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error!",
        });
        console.log(err.message);
    }
};

module.exports = { registerUser };
