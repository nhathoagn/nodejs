var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });


var jsonParser = bodyParser.json();
module.exports = function(app){
    
    app.get('/' , function (req, res) {
    
        res.render("index");
        
          
        
        })
    app.post("/login", urlencodedParser,  function (req, res) {
        res.send("Wellcome, " + req.body.username);
        console.log(req.body.username);
        console.log(req.body.password);
    });
    app.post("/loginjson",jsonParser , function (req, res ) {
          res.send("ok");
          console.log(req.body.firstname);
          console.log(req.body.lastname);
    });
}