const {users} = require('../models')
const Token = require('../middleware/Token')
const bcrypt = require('bcryptjs');

class AuthController{

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
    static signin = async (req,res)=>{
        //masuk atau autentikasikan akun yang sudah dibuat
        
        try{ 
        const {email,password} = req.body;

        const findEmail = await users.findOne({where:{email:email}});

        const verifyPassword = await bcrypt.compare(password,findEmail.password)

        if(findEmail && verifyPassword){
            const userInfo = Token.getInfoProtectedToken(findEmail);

            const token = Token.generateToken(userInfo)

            res.cookie('token',token,{
                sameSite:process.env.PRODUCTION==='true'?"None":'Lax',
                maxAge:new Date(Date.now() + (parseInt(process.env.COOKIE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000))),
                httpOnly:true,
                secure:process.env.PRODUCTION==='true'?true:false
            })
            return res.status(200).json(Token.getInfoProtectedToken(findEmail,token))
        }
        res.clearCookie('token')
        return res.status(404).json({message:'invalid credentials'})
        }catch(err){
            console.log(err);
            res.status(404).json({message:'error occured while login, try again later'})
        }
    }
    static LogOut = async(req,res)=>{
        try{
            res.clearCookie('token')
            res.status(200).json({message:'logout successfull'})
        }catch(err){
            console.log(err);
        }
    }
    
}


module.exports = AuthController;