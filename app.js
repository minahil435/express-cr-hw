const express = require("express");
const logger = require("morgan");
const path = require("path");
const indexRouter = require("./router/indexRouter")
const todoRouter = require("./router/todoRouter")

//server starts
const app = express();

//middleware
app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter)
app.use("/api/todo", todoRouter)

app.listen(3000, function () {
    console.log(`Server is running on PORT: ${3000}`);
});

module.exports = app

