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

//inserting many document in collection
//creating PlayListCollection object and passing data as argument
const createDocument = async()=>{

    
    const result = PlaylistCollection.insertMany([PlaylistCollection({
        name: "Express",
        ctype: "Tutorial",
        videos: 1,
        author: "Unknown",
        active: true
    }),
    PlaylistCollection({
        name: "NodeJs",
        ctype: "Tutorial",
        videos: 1,
        author: "Unknown",
        active: true
    }),
    PlaylistCollection({
        name: "Mongodb",
        ctype: "Tutorial",
        videos: 1,
        author: "Unknown",
        active: true
    })])
}
createDocument();