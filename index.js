require('dotenv').config();
const Auth = require('./router/Auth');
const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/Auth',Auth);

app.listen(process.env.PORT,()=>{
    console.log('listen to the port ' + process.env.PORT)
})

