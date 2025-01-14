const express = require("express");
const { addTodo, listTodos, editTodo } = require("../controllers/todoController.js");

const todoRouter = express.Router();

todoRouter.get("/", listTodos);
todoRouter.post("/", addTodo);
todoRouter.put("/:todoId", editTodo);

module.exports = { todoRouter };
