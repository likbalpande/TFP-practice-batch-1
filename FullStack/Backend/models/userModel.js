const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        name: String,
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

exports.User = model("users", userSchema);
