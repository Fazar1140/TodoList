require('dotenv').config();
const AuthRoutes = require('./router/Auth');
const TaskRoutes = require('./router/TaskTable')
const TaskPropRoutes = require('./router/TaskProp')
const express = require('express');
const cookies = require('cookie-parser')

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookies())

app.use('/Auth',AuthRoutes);
app.use('/Task',TaskRoutes);
app.use('/TaskProp',TaskPropRoutes);

app.listen(process.env.PORT,()=>{
    console.log('listen to the port ' + process.env.PORT)
})

