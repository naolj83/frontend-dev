const { REPL_MODE_SLOPPY } = require("repl");

const ex01 = function(param, callback){
    // 비동기 코드
    // ex) 파일 시스템 접근, 네트워크 통신, SQL to DB, setTimeout
    // callback 방식, promise 방식

    setTimeout(function(){
        if(param == 'param-data'){
            callback(null, 'ok');
        } else {
            callback(new Error('fail'));
        }
    }, 2000);
}

// test01
ex01("param-data", function(err, res){
    if(err) {
        console.error(err);
    } else {
        console.log(res);
    }
});

// test02
ex01("param-error", function(err, res){
    if(err) {
        console.error(err.message);
    } else {
        console.log(res);
    }
});

console.log("waits....")