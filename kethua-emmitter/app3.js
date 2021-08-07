



var Dialog = require("./dialog")
var dialog = new Dialog();
dialog.on("hello", function (data) {
    console.log("có 1 lời chào mới !", data);
});
 dialog.sayHello("Hoang")