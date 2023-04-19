var http  = require('http');

var fs = require('fs');

var url = require('url');
var server = http.createServer(handleRequest);

// function handleRequest(req,res){
//     console.log(res,req)
// }

// server.listen(5000);



// function handleRequest(req,res){
//     res.end('My first server in NodeJS');
// }
// server.listen(5100);

// function handleRequest(req,res){
//       console.log(req.headers);
//   res.end(req.headers["user-agent"]);

    
// }

// server.listen(5555);



// function handleRequest(req,res){
//     console.log(req.method, req.url);
//    res.end(req.method + req.url);
  
// }

// server.listen(5566);

// function handleRequest(req,res){
//     res.end(JSON.stringify(req.headers));

//     res.end()
// }

// server.listen(7000,()=>{
//     console.log('server listening on port 7000');
// })


// function handleRequest(req,res){
//     res.statusCode = 202
//       res.end(JSON.stringify(req.headers));

// }

// server.listen(3333,()=>{
//     console.log('server listening on port 3333');
// })


// function handleRequest(req, res){
// res.setHeader('content-type', 'text/html');
// res.end('<h3>Welcome to altcampus</h3>')
// }

// server.listen(8000);


// function handleRequest(req, res){
//     res.writeHead(205,{'content-type': 'text/html'});
//     res.end('<h3>Welcome to altcampus</h3>')
//     }
    
//     server.listen(8000);
    

// function handleRequest(req, res){
// res.setHeader('content-type', 'application/json');

// res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}));


//     }
    
//     server.listen(8888);


// function handleRequest(req,res){
// if(req.method === "POST" && req.url === "/index"){
//     console.log(req.method);
//     res.setHeader('content-type', 'text/html');
//     res.end('<h2>posted for first time</h2>');
// }
// }

// server.listen(5050);


// function handleRequest(req,res){
//     if(req.method === "GET" && req.url === "/"){
//         console.log(req.method);
//         res.setHeader('content-type', 'text/plain');
//         res.end('Rahul');
//     }else if(req.method === "GET" && req.url === "/about"){
//         res.setHeader('content-type', 'text/html');
//         res.end('<h2>Rahul</h2>');

//     }else{
//               res.writeHead(404, { "Content-Type": "text/html" });
//                 res.end("<h1>Page not found</h1>");

//     }
//     }
    
//     server.listen(2345);


    // function handleRequest(req,res){
    //     if(req.method === "GET" && req.url === "/users"){
    //         console.log(req.method);
    //         res.setHeader('content-type', 'text/html');
    //         fs.readFile('./index.html',(err,content)=>{
    //       if (err) console.log(err);
    //       res.end(content);

    //         })
    //     }else if(req.method === "POST" && req.url === "/users"){
    //         res.setHeader('content-type', 'text/html');
    //         res.end('Posted for the second time');
    
    //     }else{
    //               res.writeHead(404, { "Content-Type": "text/html" });
    //                 res.end("<h1>Page not found</h1>");
    
    //     }
    //     }
        
    //     server.listen(2345);
    

function handleRequest(req, res){
    let parsedUrl = url.parse(req.url, true);

    let pathname = parsedUrl.pathname;
    console.log(pathname);

    if(req.method === "GET" && pathname === "/users"){
        res.setHeader('content-type', "application/json");
        res.end(JSON.stringify(parsedUrl.query));
    }
}
server.listen(2345);

