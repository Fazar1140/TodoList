
require('dotenv').config()

const jwt = require('jsonwebtoken');

const generateToken = (payload,passwordReset=false)=>{
    return jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'24H'})
}

const getInfoProtectedToken = (users,token)=>{
    return {id:users.id,email:users.email,username:users.username,token}
}
const getToken = (token)=>{
    return{token};
}

const verifyToken = (req,res,next)=>{
    try{

        const {token} = req.headers['authorization'];

        if(!token){
            res.status(401).json({message:'token is missing please login'})
        }

        const decodeInfo = jwt.verify(token,process.env.SECRET_KEY);

        if(decodeInfo && decodeInfo.id && decodeInfo.email){
            req.user=decodeInfo
            next()
        } else{
            return res.status(401).json({message:'invalid token,please log in again!'})
        }

    }catch(err){
        console.log(err)

        if(err instanceof jwt.TokenExpiredError){
            return res.status(401).json({message:'token is expired please log in again'})
        }
        else if(err instanceof jwt.JsonWebTokenError){
            return res.status(401).json({message:'invalid token please log in again'})}
        // }else{
        //     return res.status(500).json({message:'internal server error!'})
        // }
    }
}

module.exports = {generateToken,getInfoProtectedToken,verifyToken,getToken}