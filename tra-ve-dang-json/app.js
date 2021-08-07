var http = require("http");
var fs = require("fs");

 http.createServer(function (req, res) {
     if(req.url === "/" || req.url === "/index.html"){
         fs.createReadStream(__dirname + "/index.html").pipe(res);
     }else if (req.url === "/api"){
        res.writeHead(200, {'Content-Type': 'application/json'});
    
        var obj = {
            firstName: "Hoa",
            lastName: "thien"
        }
        res.end(JSON.stringify(obj)); 
     }else{
         res.writeHead(404);
         res.end();
     }
   
   
   

 }).listen(1337,"127.0.0.1", function () {
     console.log("server listening on ");
 })