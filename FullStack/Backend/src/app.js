require("dotenv").config();
const PORT = process.env.port || 1902;
require("../config/db.js");

const express = require("express");
const cors = require("cors");
const { todoRouter } = require("../api/v1/router/todoRouter.js");
const app = express();

// req body parse and attach to req
app.use(express.json());

// to allow the particular domain to connect to our backend
app.use(cors({ origin: "http://localhost:5173" }));

// it handles requests related to TODOs
app.use("/api/v1/todo", todoRouter);

// run the server
app.listen(1902, () => {
    console.log(`--------- Server is running on port ${PORT} ----------------`);
});
