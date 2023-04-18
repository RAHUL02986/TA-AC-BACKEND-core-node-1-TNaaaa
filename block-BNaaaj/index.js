console.log('Welcome to Nodejs');

var os = require('os');

var cpus = os.cpus().length;

var freem = os.freemem();

var version = os.version();

var uptime = os.uptime();


console.log(cpus,freem, version,uptime);

var {readFile, unLinke} = require('fs');



var buffer1 = Buffer.alloc(12);

var buffer2 = Buffer.allocUnsafe(12);

buffer1.toString();

buffer2.toString();

var url = require('url');

const parsedUrl = url.parse("https://airindia.com/fares/calculate?from=delhi&to=detroit");

console.log(parsedUrl);

console.log(parsedUrl.query);

console.log(parsedUrl.pathname);

console.log(parsedUrl.protocol);
