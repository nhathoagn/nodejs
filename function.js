function hello() {
    
    console.log("anh hoang")
}
hello();
// first-class
function logSaying(fn) {
    fn()
}
logSaying(hello);
// function expression
var sayHello = function () {
    console.log("hello");
}
sayHello();

logSaying(function () {
    console.log("aaaaaaaaaa");
});