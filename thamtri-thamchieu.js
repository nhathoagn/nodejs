function ChangebyValue(b) {
    b = 2;
    
}
var a=1;
ChangebyValue(a);
console.log(a);


function ChangebyRef (obj) {
    obj.prop1 = function () {
        
    };
    obj.newProp2 = {};
    obj.d = 100;
}
var c ={};
c.prop1 = {};
ChangebyRef(c);
console.log(c);