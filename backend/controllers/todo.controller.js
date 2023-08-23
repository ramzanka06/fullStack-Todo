const Todo = require("../models/Todo.model");
module.exports.todoController = {
  getTodo: async (req, res) => {
    try{
        const todos = await Todo.find({})
        res.json(todos)
    }catch (error) {
        res.json(error)
    }
   },


  createTodo: async(req, res) => {
        try{
            const todos = await Todo.create({
                title: req.body.title,
                completed: req.body.completed
            })
            res.json(todos)
        } catch (error) {
            res.json(error)
        }
    },


  deleteTodo: async (req, res) => {
        try{
            const deleteTodo = await Todo.findByIdAndRemove(req.params.id)
            res.json(deleteTodo)
        } catch (error) {
            res.json(error)
        }
    },

  changeTodo: async (req, res) => {
    try{
        // console.log(req.body)
        const changeTodo = await Todo.findByIdAndUpdate(req.params.id, { completed: req.body.completed}, {new: true})
        // console.log(changeTodo)
        res.json(changeTodo)
    }catch (error) {
        res.json(error)
    }
  } 
}
