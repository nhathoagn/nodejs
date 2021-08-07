var util = require("util");

function Person() {
    this.firstname = "hoa";
    this.lastname = "thanh";
}
Person.prototype.sayHello = function () {
    console.log("Hello" +" "+  this.firstname + " " + this.lastname);

}
function Student() {
    Person.call(this);
    this.id ="1";
}
 util.inherits(Student,Person);
 var sv = new Student()
 sv.sayHello();