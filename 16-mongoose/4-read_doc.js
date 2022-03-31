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
    //to read all docs
    //use find()
    //to read first docs
    //use findOne()
    const result = await PlaylistCollection.find()
    console.log(result);
    //read data according to filter
    const result1 = await PlaylistCollection.find({ctype:"Music"})
    console.log(result1)
    //read data and show specific fields of it
    const result2 = await PlaylistCollection.find({ctype:"Music"}).select({name:0})
    console.log(result2)
    //read limited data 
    const result3 = await PlaylistCollection.find().limit(2)
    console.log(result3)
}

getDocument()