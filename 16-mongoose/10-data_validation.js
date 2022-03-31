const mongoose = require('mongoose');
const {isEmail} = require('validator');

mongoose.connect("mongodb://127.0.0.1:27017/firstDb").then(()=>console.log("connected to firstDb successully")).catch((err)=>console.log(err));
//to add validation we have to add validation in doc schema
//fieldName : {in here we write details and validation related to field, ex(type,maxLength, minLength, lowerCase, upperCase, required, trim,
//  validate, enum etc)}
//using validate we can create our custom validation
//unique isn't a validation prop, it ensure that particular field of document is unique as compare the samefield value in other documents
const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowerCase: true,
        //if min length < 3 then it will throw error, and we want to throw our own error then we have to wrap value in square bracket, 
        //first will be value, and second will be message
        //minlength: [3,"name must contains atleast 3 characters"]
        minlength: 3,
        maxlength: 20,
        trim:true,
    },
    ctype: String,
    videos: {type:Number,
        //first way of creating custom validation
    // validate(value){
    //     if(value < 0){
    //         throw Error("Must be in positive")
    //     }
    // }

    //another way
    validate: {
        validator: function(value){
            return value >= 0
        },
        message: "Must be in Positive"
    }
    },
    email:{
        type:String,
        unique: true,
        validate(value){
            if(!isEmail(value)){
                throw Error("incorrect email pattern")
            }
        }
    },
    author: String,
    active: Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

const PlaylistCollection = new mongoose.model('Playlist', playlistSchema)
const createDocument = async()=>{

    const insertData = new PlaylistCollection({
        name: "Valorant",
        ctype: "Game",
        videos: 20,
        email: "laiq@gmail.com",
        author: "Unknown",
        active: true
    })
    const result = await insertData.save();
}
createDocument();