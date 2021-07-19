const assert = require('assert');
const { hello } = require('../ex01');

describe('hello()', function(){     // 람다식 x
    it('"Hello World" 문자열을 반환해야 함', function(){    // it에서 try catch 매핑하고 있음
        assert.strictEqual(hello(), "Hello World")
    });
});