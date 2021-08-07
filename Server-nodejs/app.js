var http = require("http");
var fs = require("fs");

 http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    var html = fs.readFileSync(__dirname + "/index.html","utf8");
    var user = "Nhat Hoang"
    html = html.replace("{user}", user);
   // fs.createReadStream(__dirname + "/index.html").pipe(res);
    res.end(html); 

 }).listen(1337,"127.0.0.1")