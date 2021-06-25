/*
변수와 데이터 타입

[기본타입(primitive), 유사객체]
1. number
2. boolean
3. string
4. undefined

[객체]
Number()
Boolean()
String()

*/
//a;      // 정의가 아니고 실행임 그래서 error 남
var u;  // var u = undefined; 와 동일 : 자바스크립트는 선언과 정의 동일
var i = 10;
var b = true;
var s = "Hello World";

console.log("u: " + typeof(u));
console.log("u: " + typeof(i));
console.log("u: " + typeof(b));
console.log("u: " + typeof(s));

console.log(new String(s).toUpperCase());