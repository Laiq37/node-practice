const router = require('express').Router();
const User = require('../models/user');
const cryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    let newUser;
    if(req.body.isAdmin){
        newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: cryptoJs.AES.encrypt(
              req.body.password,
              process.env.PASSWORD_SECRET_KEY
            ).toString(),
            isAdmin: req.body.isAdmin
    })}
  else{newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString()
  });}
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/login', async(req,res)=>{
try{
    const user = await User.findOne({
    username: req.body.username
});
if(!user) return res.status(401).json('user doesn\'t exist');
console.log('after username check');
const hashPassword = cryptoJs.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY);
const pass = hashPassword.toString(cryptoJs.enc.Utf8);
if(pass != req.body.password)return res.status(401).json('wrong password');
console.log('after password check');
const token = jwt.sign({
    id: user._id,
    isAdmin: user.isAdmin
}, process.env.JWT_SECRET_KEY,{expiresIn:"3d"});
const {password, ...others} = user._doc;
console.log(token);
res.status(200).json({...others,token}); 
}catch(err){
    res.status(500).json(err);
}
});

module.exports = router;
