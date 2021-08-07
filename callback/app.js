var firstFuntion =  function () {
    console.log("em chào anh hoàng ạ ");

}
var secondFuntion =  function () {
    setTimeout(firstFuntion,5500);
    console.log("alo alo");
    
}
secondFuntion();