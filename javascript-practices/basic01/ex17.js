// function 객체 메서드 call

console.log("======global========")
global.name1 = "둘리"; 
console.log(name1, global.name1);   
var email = "dooly@gamil.com";  // global로 접근 안됨 lecxical environment에 들어가기 때문에
console.log(email, global.email);   // global도 찾고 lexical도 찾는데 global에 없으니까 undefined


// apply, call - 호출과 동시에 this 바인딩
console.log("======function 객체 메서드 apply=========")
var f1 = function(){
    console.log(this);      // this는 global
}

f1();

//this 바꾸기
var o = {
    name1: "마이콜"
}
f1.apply(o);        // apply는 파라미터가 없는 함수를 부를 때 사용가능


console.log("======function 객체 메서드 apply=========");
var f2 = function(s){
    console.log(s + " " + this.name1);
}
f2.call(o, "hi");


// 비동기 callback 함수에서의 this 바인딩