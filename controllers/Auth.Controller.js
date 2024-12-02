const {users} = require('../models')
const bcrypt = require('bcryptjs');

class AuthController{

    static provideAuth = async (req,res)=>{
        //memberi tampilan dari website untuk authentikasi akun
        res.send('Auth finder');
    }

    static signup = async (req,res)=>{
        //membuat akun yang berisikan email,username dan password
        const {email,username,password} = req.body;

        const findEmail = await users.findOne({where:{email:email}});

        const findUsername = await users.findOne({where:{username:username}})

        if(findEmail){
            return res.status(200).send('email is already used!');
        }
        if(findUsername){
            return res.status(200).send('username is already used!');
        }

        const createUser = await users.create({
            email:email,
            username:username,
            password: await bcrypt.hash(password,10)
        })
        res.send(createUser);

    }
    
    
}

module.exports = AuthController;