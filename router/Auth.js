const express = require('express');
const AuthLibrary = require('../controllers/Auth.Controller')
const routes = express.Router();

routes.post('/signup',AuthLibrary.signup)
routes.post('/signin',AuthLibrary.signin)
routes.get('/logout',AuthLibrary.LogOut)
 

module.exports = routes;