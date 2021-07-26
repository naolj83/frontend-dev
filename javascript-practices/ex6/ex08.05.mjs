/**
 * 
 * mixed with named & unnamed(default)
 */


 const add1 = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

// export 문법
export { add1, subtract };
// Enhanced Object Literal를 사용해서 unnamed export를 하였다.(객체 리턴, 분해는 안됨)
// 16번 라인과 차이점을 이해하면 ES6 모듈 시스템 지원의 export, import는 끝~
export default { add1, subtract };