var person ={
    firtname: "",
    lastname: "",
    getFullName: function () {
        return this.firtname + " " + this.lastname;
    }
}
var hoang = Object.create(person);
hoang.firtname = "hoang";
hoang.lastname = "nguyen";
console.log(hoang.getFullName());