//import mongoose
const mongoose = require('mongoose');

//connect mongoose with mongodb
//connect requires mongodb path 
//after path write dbName like below where name db firstDb
//connect will connect to db directly if exist otherwise first db will be created automatically then connection will established
//connect returns a promise
mongoose.connect("mongodb://127.0.0.1:27017/firstDb").then(()=>console.log("connected to firstDb successully")).catch((err)=>console.log(err));