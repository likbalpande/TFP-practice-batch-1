const { Schema, model } = require("mongoose");

const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: String,
        deadline: Date,
        status: {
            type: String,
            enum: ["incomplete", "complete", "in-progress"],
            default: "incomplete",
        },
        priority: {
            type: String,
            enum: ["low", "normal", "high", "urgent"],
            default: "normal",
        },
    },
    {
        timestamps: true,
    }
);

exports.Todo = model("todos", todoSchema);
