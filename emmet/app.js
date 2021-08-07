var Emitter = require("./emitter");
var eventconfig = require("./config").events;
var emitter = new Emitter();
emitter.on(eventconfig.GOOD_Scores, function () {
    console.log("quá giỏi");
});
emitter.on(eventconfig.GOOD_Scores, function () {
    console.log("BÁO PHỤ HUYNH KHEN THƯỞNG NGAY");

});
emitter.on(eventconfig.BAD_Scores, function () {
    console.log("ngu vl,ăn phí gạo ");

});
emitter.on(eventconfig.BAD_Scores, function () {
    console.log("đánh chết mẹ nó đi ");
})
var scores = [10,9,8,5,4];
for (var h of scores){
    if (h < 5 ){
        console.log("điểm thấp quá",h);
        emitter.emit(eventconfig.BAD_Scores);
    }else{
        console.log("điểm cao vl ", h);
        emitter.emit(eventconfig.GOOD_Scores);
    }
}