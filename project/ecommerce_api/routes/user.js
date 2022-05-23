const router = require('express').Router();
const {verifyTokenAndUser, verifyTokenAndAdmin} = require('./userVerification');
const cryptoJs =require("crypto-js")
const User = require("../models/user")

router.put("/:id",verifyTokenAndUser,async(req,res)=>{
    if(req.body.password){
        req.body.password = cryptoJs.AES.encrypt(req.body.password,process.env.PASSWORD_SECRET_KEY).toString();
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, {new:true});
        return res.status(200).json(updatedUser);
    }
    catch(err){
        res.status(500).json(err);
    }
});

router.delete("/:id",verifyTokenAndUser,async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json("user deleted");
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/find/:id", verifyTokenAndAdmin, async (req,res)=>{
    try{
        console.log(req.params.id);
       const user= await User.findById(req.params.id);
       const {password, ...others} = user._doc;
        return res.status(200).json(others);
   }catch(err){
       console.log(err);
   } 
});

router.get("/all", verifyTokenAndAdmin, async(_,res)=>{
    try{
       const users = await User.find();
        return res.status(200).json(users);
   }catch(err){
       res.status(500).json(err);
   } 
});

module.exports = router;