function Person() {
    this.message = "Hello4";
    this.cach4 = function () {
        console.log(this.message);
    }
}
module.exports = Person;