const express = require('express');
const TaskController = require('../controllers/Task.Controller');
const Token = require('../middleware/Token')
const routes = express.Router();

//tanpa token
routes.get('/',TaskController.getAllTaskWithProp)
routes.post('/post',TaskController.postTaskTable)
//memerlukan token
routes.use(Token.verifyToken);
routes.post('/create',TaskController.createTaskTable)
routes.get('/myTask',TaskController.getAllTask)
routes.get('/:id',TaskController.getTaskById)
routes.patch('/:id',TaskController.patchTaskTable)
routes.delete('/:id',TaskController.deleteTaskTable)

module.exports = routes