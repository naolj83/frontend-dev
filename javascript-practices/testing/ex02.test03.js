const assert = require('assert').strict;
const { na } = require('./ex02');

try{
    assert.deepEqual(na(), [2, 4, 6], 'fail: deepEqual' /*실패할 경우 메세지 지정*/);  
    assert.equal(na(), [2, 4, 6], 'fail: equal');  
    console.log('ok');
} catch(err) {
    console.log(err.message);
}