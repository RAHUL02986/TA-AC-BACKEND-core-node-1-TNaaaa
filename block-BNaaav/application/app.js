let http = require('http');

let fs = require('fs');

let server = http.createServer(handleRequest);


function handleRequest(req,res){
console.log(req.method, req.url);

if (req.method === "GET" && req.url === "/"){

       fs.createReadStream('./index.html').pipe(res);

}
else if(req.method === "GET", req.url ==="/about"){

    res.setHeader('content-type', 'text/html')

    fs.createReadStream('./index.html').pipe(res);

}
else if (request.url.split(".").pop() === "css") {
    // set header for css file
    response.setHeader("Content-Type", "text/css");
    // read css file and send it in response
    fs.readFile("../stylesheets/style.css", (err, content) => {
      if (err) return console.log(err);
      response.end(content);
    });
  }
  else if(request.methods === "GET" && request.url.split(".").pop() === "png") {
    response.setHeader("Content-Type", "image/png");
    fs.readFile("../media/team/", (err, content) => {
      if (err) return console.log(err);
      response.end(content);
    });
  }

}


server.listen(3000,()=>{
    console.log('server listening on port 3k');
})