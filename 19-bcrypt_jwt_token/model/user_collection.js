require('dotenv').config();
let moongoose = require('mongoose');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

let UserSchema = new moongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    gender:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true,
        unique:true
    }, 
    age:{
        type: String,
        required: true
    }, 
    password:{
        type: String,
        required: true
    },
    confirmPassword:{
        type: String,
        required: true
    },
    tokens:[{
        token: {
            type: String,
            required: true,
        }
    }]
});

UserSchema.methods.generateAuthToken = async function(){
    try
    {
        //to generate jsonwebtoken we use sign() method we must provide two arg, first is payloadId, and second is secret key(min 32 characters)
        //In JSON Web Tokens, the payload is a set of fields that you want to include in the token being generated; Things your API will need to, 
        //say, get the right data for a particular user.
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token: token});
    await this.save();
    console.log(token);
    return token;
}
    catch(e){
        console.log("token generation failed");
    }
};

//this method will convert pass into hash value
//first arg is methodName which represent the method before will this pre function will be executed
//second arg is function, note dont use fat arrow function()=>{}, instead use function(){}, because fat arrow function not support this keyword
//next parameter in function will trigger the methodName
//schema.pre(methodName, funtion(next){})
UserSchema.pre('save',async function(next){
    //this if block will only run when password field is modified or new user is register(when new register will be created then password field will also be created)
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
});

let UserCollection = new moongoose.model('User', UserSchema);

module.exports = UserCollection;