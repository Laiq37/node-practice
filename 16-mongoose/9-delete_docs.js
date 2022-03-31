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

//delete documents in collection
const deleteDocument = async(id)=>{
    //deleteOne wll return message not doc
    // const result = await PlaylistCollection.deleteOne({_id:id})
    // console.log(result)

    //delete doc and also show the deleted doc we use findByIdAndDelete method
    const result1 = await PlaylistCollection.findByIdAndDelete({_id:id})
    console.log(result1)
    
}

deleteDocument("62454c97e0dcb8674257a788")