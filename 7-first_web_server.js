//for creating webserver first we have to import http package
const http = require('http');

// after that we have to create server using createServer function, which primarly requires an anonymous function which provides two parameters 
// request and response, request is what user requested and response is what server respond against of request, to show response we use end function
// and passes the desired content as argument according to request
const server = http.createServer((req, res) => {
    res.end('Hello Brother');
})

// now the server has been created but now we have to listen the server, for that we have to assign a port no. and hostname
server.listen(8000, '127.0.0.1', ()=> {console.log('listening to port 8000')});