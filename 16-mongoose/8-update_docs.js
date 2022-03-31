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

//update documents in collection
const updateDocument = async(id)=>{
    //updateOne method will return no.of documentsupdated
    // const result = await PlaylistCollection.updateOne({_id:id}, {$set:{ctype: "Tutorial", name:"Mongoose"}})
    // console.log(result)

    //update docs and also show the docs we use findByIdAndUpdate method
    //by default it will not return updated docs but original, to get updated one {new: true}
    const result1 = await PlaylistCollection.findByIdAndUpdate({_id:id}, {$set:{ctype: "Tutorial", name:"NodeJs"}},{new:true})
    console.log(result1)
    
}

updateDocument("62454c97e0dcb8674257a788")