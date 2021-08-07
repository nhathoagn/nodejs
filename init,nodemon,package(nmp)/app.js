var _ = require("lodash");

var array = [1];
var other= _.concat(array,2,[3],[[4]]);

console.log(other);
console.log(array);

var newResult = _.difference([2,1],[2,3]);
console.log(newResult);

//collection

var users = [
    {"user": "Hoa","age":36,"active":true},
     {"user": "Hoang","age":46,"active":true},
     {"user": "Hoan","age":26,"active":true}
];

var user=_.find(users, function (user) {
    return user.age <40;
});

var user2=_.filter(users, function (user) {
    return user.age <40;
});
console.log("Find: ",user);
console.log("filter: ",user2)