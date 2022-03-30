
const fs = require('fs');
const http = require('http');

//noramlly we are listening request in createServer method in callback function
//but there is also an another way
const server = http.createServer();

//another way
//server.on method we can listen request, it requires a serverType, ex : request,close etc, and a callback function(same callback func which we normally
//  use in creatServer method)
server.on('request', (req,res)=>{
    //createReadStream will return ReadStream object
    const rstream = fs.createReadStream('input.txt');
    //now we have to listen read stream object

    //1st way of listening stream object

    // //readStream will trigger data method when their is data to read
    // rstream.on('data', (chunk)=>{
    //     res.write(chunk);
    // });
    // //end trigger when there will be no more data to read
    // rstream.on('end', ()=>{
    //     res.end();
    // });
    // //error trigger when there is an error
    // rstream.on('error', (error)=>{
    //     res.end('file doesn\'t exist');
    // });

    //another way
    //on our readStream object we will call pipe method and pas our destination as arg, here res is destination 
    rstream.pipe(res, false);
    

});
server.listen(8000, '127.0.0.1');