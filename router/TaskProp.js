const express = require('express');
const TaskPropController = require('../controllers/TaskProp.Controller');
const Token = require('../middleware/Token')
const routes = express.Router();


routes.use(Token.verifyToken)
routes.post('/create',TaskPropController.createTaskProp)
routes.get('/',TaskPropController.getAllTaskProp)
routes.patch('/:id',TaskPropController.PatchTaskProp)
routes.delete('/:id',TaskPropController.deleteTaskProp)

module.exports = routes