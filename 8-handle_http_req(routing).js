const http = require('http');

//we can handle request using if else condition, and respond according to request
const server = http.createServer((req, res) => {
    //req.url give info about current url
    console.log(req.url)
    if(req.url == "/contact" || req.url == "/about" || req.url == "/" ){
        res.end( req.url == "/contact" ? "Contact page" : req.url == "/about" ? "About Page" : "Home Page" )
    }
    else{
        //normally server response code is 200(ok response), but we can change response code acc to request, we simply change res code in writehead
        // method and we can also define Content-type, by default content type  set to document
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end('<h1> error 404. Page Not Found</h1>');
    }
})
server.listen(8000, '127.0.0.1', ()=> {console.log('listening to port 8000')});