const mongoose = require("mongoose");
// mongodb+srv://samyaktpatil17:jLXlkNodGyxyY7qZ@cluster0.6f89o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model("todo", todoSchema);

module.exports = { todo };