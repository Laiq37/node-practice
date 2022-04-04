let express = require('express');
require("../db/conn");
let userRouter = require('../router/router');

let port = process.env.PORT || 3000;
let app = express();

//express.json() is used to parse the request/response in json encoded form, we normally used it when we are sending request through postman
app.use(express.json());
//express.urlencoded({extended:false}) is used when we are sending request from frontend and wanted request data to be shown we will use this
app.use(express.urlencoded({
    extended:false
}));
app.use(userRouter);

app.listen(port, ()=>{
    console.log('Sever has been initialized');
});