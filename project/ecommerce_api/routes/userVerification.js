const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET_KEY,(error, user)=>{
            if(error)return res.status(403).json("token is not valid");
            req.user = user;
            next();
        })
    }
    else{
        res.status(401).json('Authenication failed!');
    }
}

const verifyTokenAndUser = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("you are not allowed to update other user data");
        }
    });
}

const verifyTokenAndAdmin =  (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            console.log("user is Admin");
            next();
            
        }else{
            res.status(403).json("you are not allowed");
        }
    });
}

module.exports = {verifyToken, verifyTokenAndUser, verifyTokenAndAdmin};