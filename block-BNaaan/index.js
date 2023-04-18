var http = require('http');

var server = http.createServer(handleRequest);
function handleRequest(req, res){
    res.end('Welcome');

    console.log(req.headers);
    console.log(req.methods);
    console.log(req.url);
}


server.listen(3000, () => {
    console.log('server listening on port 3000');
})