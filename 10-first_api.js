const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{
    const data = fs.readFileSync(`${__dirname}/user_api.json`, 'utf-8', );
    if(req.url == "/"){
        res.end("Home Page");
    }
    else if(req.url == "/contact"){
        res.end("Contact Page");
    }
    else if(req.url == "/about"){
        res.end("About Page");
    }
    else if(req.url == "/user-api"){
        res.writeHead(200, {"Content-type":"application/json"});
        res.end(data);
    }
    else{
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end('<h1> error 404. Page Not Found</h1>');
    }
});
server.listen(8000,"127.0.0.1");