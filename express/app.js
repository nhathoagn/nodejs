var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
app.use("/assets", express.static(__dirname + "/public"));
var apiController = require("./Controller/apiController");
var homeController = require("./Controller/homeController")
var mysql = require('mysql')
//var mongoose = require("mongoose");
//custom middleware
app.set("view engine", "ejs");


// mongoose.connect();
// var Schema = mongoose.Schema;
// var personSchema = new Schema({
//     firstName: String,
//     lastName: String,
//     address: String
// });
// var Person = mongoose.model("Person", personSchema);
app.use("/", function (req, res, next) {
    console.log("Request URL: ", req.url );
    req.requestTime = new Date();

    //ketnoi mysql
    var connecttion = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "testdatabase"
    });
    
    connecttion.connect();
    connecttion.query("SELECT * FROM tbl_sinhvien WHERE MASV ='SV001'", function (err, rows){

    
      if (err) {
          throw err;
      }
       console.log(rows[0].TEN);
   });
    connecttion.end();
    next();
})

var port = 300;

apiController(app);
homeController(app);
 
//  app.get("/", function (req, res) {
//      console.log("Cookies: ", req.cookies);
//      res.send(`
//      <link href="/assets/style.css" rel="stylesheet" type="text/css">

//      <h1>Hello anh hoang</h1>
//      <p>Request time: ${req.requestTime}</p>
//      `);
//  })

//  app.get("/api", function (req, res) {
//    res.json({
//       firstname: "hoang",
//       lastname: "nguyen"
//    });     
//  })

// app.get("/user/:id",function (req, res) {
//    res.render("user", {ID: req.params.id , queryString: req.query.qstr});    
// })

//  app.get("/user/:id", function (req, res) {
//      res.cookie("username", res.params.id);
//      res.send(`<h1>user: ${req.params.id}</h1>`)
//  })


 app.listen(port, function () {
     console.log("Server is listening on port:", port);
 })