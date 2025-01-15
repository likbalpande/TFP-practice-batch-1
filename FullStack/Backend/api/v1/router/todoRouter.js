const express = require("express");
const { addTodo, listTodos, editTodo, deleteTodo } = require("../controllers/todoController.js");

const todoRouter = express.Router();

todoRouter.get("/", listTodos);
todoRouter.post("/", addTodo);
todoRouter.patch("/:todoId", editTodo);
todoRouter.delete("/:todoId", deleteTodo);

module.exports = { todoRouter };
