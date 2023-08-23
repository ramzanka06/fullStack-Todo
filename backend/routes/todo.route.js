const { Router } = require("express");
const { todoController } = require("../controllers/todo.controller");
const router = Router();

router.get('/todo', todoController.getTodo)
router.post('/todo', todoController.createTodo)
router.delete('/todo/:id', todoController.deleteTodo)
router.patch('/todo/:id', todoController.changeTodo)

module.exports = router;
