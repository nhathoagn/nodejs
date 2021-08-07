function readDatabase(callback) {
    var user = {
        name: "nhat hoang"
    }
    callback(user)
}
readDatabase(function (data) {
    console.log("read done callback");
    console.log("data: ", data);
});
readDatabase(function (data) {
    console.log("read done callback 2! ");
    console.log("user name: ", data.name);
});