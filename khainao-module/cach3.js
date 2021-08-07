function Person() {
    this.message = "Hello3";
     this.cach3 = function () {
        console.log(this.message);
    }
}
module.exports = new Person();