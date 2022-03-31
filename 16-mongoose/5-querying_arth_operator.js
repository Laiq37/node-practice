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
    //filtering data on the basis of arthematic operator
    //to use querying operator {field: {$typeOfOper: values}}
    //typeOfOper gt,gte,lt,lte,in(takes array),nin(takes array),eq,ne
    const result = await PlaylistCollection.find({name:{$in:['Express', 'High Hopes']}})
    console.log(result)
}

getDocument()