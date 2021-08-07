var obj = {
    sayHello: "Hello"
}
 console.log(obj.sayHello);
 console.log(obj['sayHello']);



 var prop = "sayHello";
 console.log(obj[prop]);


 var arr =[];
 arr.push(function () {
     console.log("Hello 1");
});
 arr.push(function () {
     console.log("Hello 2");
});
 arr.push(function () {
     console.log("Hello 3");
});
 arr.push(function () {
     console.log("Hello 4");
});
 
arr[0]();
 
 
