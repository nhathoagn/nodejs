'use strict';
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName; 
    }
    sayHello(){
        console.log("Hello "+ this.firstName+ " "+ this.lastName);

    }
}
var hoa = new Person ("hoang", "nhat");
hoa.sayHello();