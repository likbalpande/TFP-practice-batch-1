const { Schema, model } = require("mongoose");

const otpSchema = new Schema(
    {
        otp: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

exports.OTP = model("otps", otpSchema);
// type: Schema.Types.ObjectId,
// ref: "users",
