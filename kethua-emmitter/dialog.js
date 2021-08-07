'use strict';
var EventEmitter = require("events");
var util = require("util");
module.exports = class Dialog extends EventEmitter {
    constructor(){
        super();
        this.message = "hello word !";

    }
    sayHello(data){
        console.log(`${this.message}: ${data}`);
        this.emit("hello", data);
    }
}
