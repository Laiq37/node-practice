//import express
const express = require("express");
const expressApp = express();

//in express we uses post, get, del, update methods we dont need to create server
expressApp.get("/", (req,res)=>{
    //in express for ending/sending data we use send/json, in node we can use both end and send
    //send method by default treat data as text/html whereas json treat as application/json
    //res.json("pass json data")
    res.send("Welcome to Express Module");
});

//now we have to listen same as node
expressApp.listen(8000, ()=>{
    console.log("listening to port 8000");
});