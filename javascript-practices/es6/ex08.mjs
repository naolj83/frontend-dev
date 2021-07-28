// 1.
// unnamed export 모듈에서 대상을 하나 import 할 때는 이름을 지정해야 한다.

import unmaedFunction from './ex08.01.mjs';
import unmaedObject from './ex08.02.mjs';

console.log(unmaedFunction(100, 200), unmaedObject.add(100, 200), unmaedObject.subtract(3, 1));


// 2.
// named export는 import 대상이 다수 있기 때문에 특정 이름으로 import 할 수 없다.(named export는 다 구조 분해 가능)
// 대신에 * as ~ 를 사용할 수 있다.
// 에러: import m from './ex08.03.mjs';
// 가능: import { add, subtract } from './ex08.03.mjs';
import * as m from './ex08.03.mjs';

console.log(m.add(100, 200));


// 3.
// 특정 이름을 사용해서 구조 분해가 가능하다.
import { subtract, add } from './ex08.04.mjs';

console.log(subtract(200, 100), add(100, 200));


// 4.
import math, { add1 } from './ex08.05.mjs';

console.log(add1(100, 200), math.subtract(100, 200));