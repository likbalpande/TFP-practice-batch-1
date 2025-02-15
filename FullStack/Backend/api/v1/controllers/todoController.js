const { Todo } = require("../../../models/todoModel.js");

exports.addTodo = async (req, res) => {
    try {
        const { body } = req;
        console.log("🟡 : body:", body);
        await Todo.create(body);
        res.status(201);
        res.json({
            status: "success",
            message: "Todo added",
        });
    } catch (err) {
        console.log("-------------\n❌", err.message, "\n----------------\n");
        if (err.name === "ValidationError") {
            // Handle MongoDB schema validation errors
            res.status(400);
            res.json({
                status: "fail",
                message: `Todo not created: ${err.message}`,
            });
        } else {
            res.status(500);
            res.json({
                status: "fail",
                message: `Internal Server Error`,
            });
        }
    }
};

exports.listTodos = async (req, res) => {
    try {
        const todosRes = await Todo.find();
        res.status(200);
        res.json({
            status: "success",
            message: "Todo fetched",
            data: {
                todos: todosRes,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            message: `Internal Server error : Cannot get TODOs`,
        });
    }
};

exports.editTodo = async (req, res) => {
    try {
        const { body } = req;
        const { title, ...remBody } = body;
        const { todoId } = req.params;
        console.log("🟡 : todoId:", todoId);
        const updatedDoc = await Todo.findOneAndUpdate({ _id: todoId }, remBody, {
            returnDocument: "after",
        });
        console.log(updatedDoc);

        res.status(200);
        res.json({
            status: "success",
            message: "Todo added",
        });
    } catch (err) {
        console.log("-------------\n❌", err.message, "\n----------------\n");
        res.status(400);
        res.json({
            status: "fail",
            message: `Todo not created: ${err.message}`,
        });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const { todoId } = req.params;
        await Todo.findOneAndDelete({ _id: todoId });

        res.status(204);
        res.json({
            status: "success",
            message: "Todo added",
        });
    } catch (err) {
        console.log("-------------\n❌", err.message, "\n----------------\n");
        res.status(400);
        res.json({
            status: "fail",
            message: `Todo not created: ${err.message}`,
        });
    }
};
