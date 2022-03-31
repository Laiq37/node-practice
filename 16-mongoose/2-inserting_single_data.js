const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/firstDb").then(()=>console.log("connected to firstDb successully")).catch((err)=>console.log(err));

//to create collections in mongodb database through mongoose first we have to define schema
//create instance of mongoose.schema()
//and passes document structure init as argument
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
})

//now we have defined document schema for a collection
//collection creation
//now we are creating mongoose.model() instance which will as wrapper and provides an interface for database to creating, quering, updating and deleting records etc
//mongose.model(collectionName, schemaObject)
const PlaylistCollection = new mongoose.model('Playlist', playlistSchema)

//inserting document in collection
//creating PlayListCollection object and passing data as argument
const createDocument = async()=>{

    const insertData = new PlaylistCollection({
        name: "High Hopes",
        ctype: "Music",
        videos: 1,
        author: "Unknown",
        active: true
    })
    
    //save() method return a promise so we have to await
    const result = await insertData.save();
}
createDocument();