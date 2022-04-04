require('dotenv').config()
let mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`).then(()=>{
    console.log("Connected to DB");
}).catch((_)=>{
    console.log("Connection failed!");
});
