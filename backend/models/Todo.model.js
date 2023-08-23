const moongose = require("mongoose");

const todoSchema = moongose.Schema({
  title: String,
  completed: {
    type: Boolean,
    default: false
  },
});

const Todo = moongose.model("Todo", todoSchema);

module.exports = Todo;
