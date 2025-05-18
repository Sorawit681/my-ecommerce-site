const http = require('http');
const url = require('url')
const fs = require('fs');
const path = require('path');

const sever = http.createServer(function (req, res) {
    // var q = url.parse(req.url,true)
    // var filename
    var q = url.parse(req.url, true).query;
    let filePath = "."+req.url;
    if(filePath === "./")filePath = "./indexe.html";

 
    const extname = path.extname(filePath);
    let ContentType = "text/html";
    if(extname === ".css")  ContentType = "text/css";
    if(extname === ".xml")  ContentType = "text/xml";
    if(extname === ".js")  ContentType = "application/js";

    fs.readFile(filePath,function(err,htmlDoc){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 File Not Found!!!!");
        }
        res.writeHead(200, {'Content-Type': ContentType});
        // res.write(req.url)
        // var q = url.parse(req.url, true).query;
        // var txt = q.fname + ' '+ q.lanme
        res.write(htmlData);
        res.end();
    });

});
sever.listen(4000);