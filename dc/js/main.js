'use strict'
function log(idea){
  console.log(idea);
}

// object
let obj = {
  name : 'test',
  number : 22,
}

log(obj.name);

let obj2 = obj;
obj2.name = 'test2';
//obj는 가리키고있는 주소가 복사됨
log(obj.name);
