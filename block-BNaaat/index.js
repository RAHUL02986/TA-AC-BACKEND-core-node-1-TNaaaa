var http = require('http');

var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    if(req.method === "GET" && req.url === "/file"){
        res.setHeader('content-type', 'text/html');
        fs.readFile('./node.html',(err, content)=>{
            if(err) console.log(err);

            res.end(content);
console.log(req.method, req.url);

        });
    }else if(req.method === "GET" && req.url === "/stream"){

        res.setHeader('content-type', 'text/html');
        fs.createReadStream("./node.html").pipe(res);
console.log(req.method, req.url);
    }

}

server.listen(5555,()=>{
    console.log('server is listning on port 5555');
})