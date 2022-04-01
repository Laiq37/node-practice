const mongoose = require('mongoose')

const connection = mongoose.connect("mongodb://127.0.0.1:27017/olympics"
// ,{
    // userCreatIndex: true,
    // userNewUrlParser: true,
    // userUnifiedTopology: true,
// }
).then(()=>{
    console.log("Connection established with olympics db")
}).catch((e)=>{
    console.log("Connection failed!")
})