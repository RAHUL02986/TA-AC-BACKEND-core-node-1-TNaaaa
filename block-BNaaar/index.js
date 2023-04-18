var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    console.log(req.method, req.url);
    if(req.method === 'GET' && req.url=== '/'){
        res.setHeader('content-type','text/plain');
        res.end('Welcome to home page');
    }else if(req.method === 'GET' && req.url === '/about'){
        res.setHeader('content-type', 'text/html');
        res.write('<h2>This is all about NodeJS');
        res.end();
    }else if(req.method === 'POST', req.url === '/about'){
        res.write('this is a post request');
        res.end();
    }else{
        res.end(404);
    }
}

server.listen(5000, ()=>{
    console.log('server listening on port 5000');
})