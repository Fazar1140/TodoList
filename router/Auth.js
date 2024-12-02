const express = require('express');
const AuthLibrary = require('../controllers/Auth.Controller')
const routes = express.Router();

routes.post('/signup',AuthLibrary.signup)
 
routes.get('/',AuthLibrary.provideAuth)
 

module.exports = routes;