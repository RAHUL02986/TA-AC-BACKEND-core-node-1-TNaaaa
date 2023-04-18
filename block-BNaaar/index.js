var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    // console.log(req.method, req.url);
    if(req.method === 'GET' && req.url === '/'){
        res.setHeader('Content-type','text/plain');
        res.end('Welcome to home page');
    }else if(req.method === 'GET' && req.url === '/about'){
        res.setHeader('content-type', 'text/html');
        res.end('<h2>This is all about NodeJS</h2>');
    }else if(req.method === 'POST', req.url === '/about'){
        res.setHeader('content-type', 'application/json');

        res.end(`{message: this is a post request}`);
    }else{
        res.end(404);
    

}
}

server.listen(5000, () => {
    console.log('server listening on port 5000');
})