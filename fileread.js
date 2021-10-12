
var rpise = {};

rpise.http = require('http');

rpise.fs = require('fs');

rpise.http.createServer(

    function (request, response) {

        response.writeHead(200, { 'Content-Type': 'text/html' });

        response.end(rpise.fs.readFileSync("./index.html"));

    }).listen(5555, '127.0.0.1');



/*fileread synchronously */
var fs = require("fs");
var filename = './for.js';
var data = fs.readFileSync(filename, "utf8");
console.log(data);


/*fileread asynchronously */
var fs = require("fs");
var filename = './prac.js';
var data = fs.readFile(filename, "utf8", function (err, data) {
    console.log(data);
});


