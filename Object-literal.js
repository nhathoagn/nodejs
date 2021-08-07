var person = {
    firtname: "Hoang",
    lastname: "Nguyen",
    sayBye: function () {
        console.log("Hello" + this.firtname + " "+ this.lastname);
    }
}
person.sayBye();
var keyname = "firtname";
 console.log(keyname);
//console.log(person["firtname"]);