var http = require('http');
var url = require('url')
var fs = require('fs')

var sever = http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url)
  var q = url.parse(req.url, true).query;
  var txt = q.fname + ' '+ q.lanme
  res.write(txt);
  res.end();
});
sever.listen(8080);