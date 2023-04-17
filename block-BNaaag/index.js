let {readFile, readFileSync} = require('fs')


//asycs
readFile("./content", "utf8", (err,content)=>{
    console.log(content);
});

//sycs

var result = readFileSync("./content.md","utf8");
console.log(result);

let buffer1 = buffer.alloc(10);

buffer.write("welcome to node.js");
console.log(buffer1);
console.log(buffer1.toString());