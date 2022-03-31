const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/firstDb").then(()=>console.log("connected to firstDb successully")).catch((err)=>console.log(err));

const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date:{
        type:Date,
        default:Date.now
    }
});

const PlaylistCollection = new mongoose.model('Playlist', playlistSchema)

//read documents in collection
const getDocument = async()=>{
    //filtering data on the basis of logical operator
    //to use logical operator {$logiOpera: [listOfQuery]}
    //typeOfOper and,or,not,nor
    const result = await PlaylistCollection.find({$and:[{name:{$in:['Express', 'High Hopes']}},{ctype:"Tutorial"}]})
    console.log(result)
}

getDocument()