const express = require('express');
const TaskController = require('../controllers/Task.Controller');
const Token = require('../middleware/Token')
const routes = express.Router();

routes.use(Token.verifyToken);

routes.post('/create',TaskController.createTaskTable)
routes.get('/',TaskController.getAllTask)
routes.get('/props',TaskController.getAllTaskWithProp)
routes.get('/:id',TaskController.getTaskById)
routes.patch('/:id',TaskController.patchTaskTable)
routes.delete('/:id',TaskController.deleteTaskTable)

module.exports = routes