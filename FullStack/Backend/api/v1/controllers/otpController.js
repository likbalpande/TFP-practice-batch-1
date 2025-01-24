const { OTP } = require("../../../models/otpModel");
const { sendMailUtility } = require("../utils/mailUtils");
const bcrypt = require("bcrypt");

const createOTP = async (req, res) => {
    try {
        const { body } = req;
        const { email, isResend = false } = body;

        if (!email) {
            res.status(400).json({ status: "fail", message: "Email is required!" });
            return;
        }

        // TODO: check for already registered user

        // TODO: check if OTP is already sent --> expiry
        const oldOTP = await OTP.findOne({
            email: email,
            createdAt: { $gte: Date.now() - 10 * 60 * 1000 },
        }); // returns NULL or Obj

        if (!isResend && oldOTP) {
            res.status(403).json({
                status: "fail",
                message: "OTP is already sent to this email. Try Resend!",
            });
            return;
        }

        const OTPValue = Math.floor(Math.random() * 8999 + 1000);

        const [isMailSent, errorMessage] = await sendMailUtility({
            email: email,
            subject: "OTP for verification @TASK MANGER",
            text: `Your OTP is ${OTPValue}`,
            html: `
                <html>
                <head>
                <style>
                    h2{background-color: yellow; color: green;}
                </style>
                </head>
                <body>
                    <h2>Your OTP is ${OTPValue}</h2>
                </body>
                </html>
            `,
        });

        if (!isMailSent) {
            res.status(500).json({
                status: "fail",
                message: errorMessage,
            });
            return;
        }

        // hashing
        const salt = await bcrypt.genSalt(16);
        const hashedOTP = await bcrypt.hash("" + OTPValue, salt);

        await OTP.create({
            otp: hashedOTP,
            email,
        });

        res.status(201).json({
            status: "success",
            message: "OTP sent",
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

module.exports = { createOTP };
