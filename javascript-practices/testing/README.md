# 테스트

## JavaScript 단위 테스트 도구
<br/>

1. 자바스크립트 단위 테스트 도구는 20여가지가 넘게 있다.
2. Java : JUnit == JavaScript : JSUnit(개발 중지, 2009년)
3. JSUnit 프로젝트 ---> Jasmine(2010년 ~ 현재)
   - 자체 assersion 을 가지고 있다.
   - BDD 기반 개발의 표준 테스팅에 맞는 문법을 작성할 수 있다.
4. DOM 직접 조작 어플리케이션 (jQuery 기반) -> QUnit
   - 세팅하기 쉽고 간편하게 테스트
   - Promise 기반 비동기 테스트
5. Node 기반 백엔드 어플리케이션 테스트 -> Mocha
   - Promise 기반 비동기 테스트
   - 자체 Assertion 이 없다.
   - 대신 외부 assertion 라이브러리를 다양하게 지원한다.(chai, should.js, expect.js)
   - 유연하고 확장성이 좋다.
6. Jasmine, QUnit, **Mocha**, Jest(React 개발 테스트 도구)

## Mocha 설치
```bash
$ npm init -y
$ npm i -D mocha
$ npx mocha --version
9.0.2
```

## Mocha 테스트 케이스 모듈(.js, .esm) 작성
[ex01.js]
```javascript
exports.hello = () => 'Hello World';
```

[test/ex01.js]
```javascript

```
