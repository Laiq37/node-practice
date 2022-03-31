const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/studentsDB").then(()=>console.log("connected established successully")).catch((err)=>console.log("No connection"));