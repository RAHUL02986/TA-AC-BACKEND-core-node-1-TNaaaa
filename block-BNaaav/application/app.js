let http = require("http");
let fs = require("fs");
let server = http.createServer(handleRequest);


function handleRequest(request, response) {
  console.log(request.method, request.url);
  if (request.method === "GET" && request.url === "/") {
    fs.createReadStream("./index.html").pipe(response);
  }
  if (request.method === "GET" && request.url === "/about") {
    response.setHeader("Content-Type", "text/html");
    fs.createReadStream("./about.html").pipe(response);
  }
  if (request.url.split(".").pop() === "css") {
    // set header for css file
    response.setHeader("Content-Type", "text/css");
    // read css file and send it in response
    fs.readFile("../stylesheets/style.css", (err, content) => {
      if (err) return console.log(err);
      response.end(content);
    });
  }
  if (request.methods === "GET" && request.url.split(".").pop() === "png") {
    response.setHeader("Content-Type", "image/png");
    fs.readFile("../media/team/", (err, content) => {
      if (err) return console.log(err);
      response.end(content);
    });
  }
}
server.listen(3000,  () => {
  console.log("server is running at 3000 port");
});
