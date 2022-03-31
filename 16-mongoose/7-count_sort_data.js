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
    //count no. of documents
    //using countDocument method
    const result = await PlaylistCollection.find().countDocuments()
    console.log(result)
    //sort documents
    //using sort() method
    //1 represent ascending and -1 represent descending
    const result1 = await PlaylistCollection.find().sort({name:-1})
    console.log(result1)
}

getDocument()