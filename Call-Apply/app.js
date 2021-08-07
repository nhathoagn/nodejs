var obj = {
    name: "Mai Hoa",
    sayHello: function (param1, param2) {
        console.log(`Hello ${this.name}`);
        console.log("Params: ", param1, param2);
        
    }
}
obj.sayHello("Xin chao", "2016");
obj.sayHello.call({name: "Nhat Hoang"}, "Xin chao","2021");
obj.sayHello.apply({name: "Nhat Hoang"}, ["xin chao","2022"]);
