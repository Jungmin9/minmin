'use strict'
function log(idea){
  console.log(idea);
}

// #재귀(Recursion)
// 간단하게 정의하면 한 함수가 자기 자신을 호출하는 순간
function factorial(x) {
  if (x<0) return;
  if (x===0) return 1;
  return x * factorial(x-1);
}

factorial(3);//6  3*2*1*1
//return 3 * factorial(2); 3 * 2 * 1 * 1
//return 2 * factorial(1); 2 * 1 * 1
//return 1 * factorial(0); 1 * 1
//if(x === 0) return 1;


function revStr(str){
  if(str ==='') return '';
  return revStr(str.substr(1)) + str[0];
}
log(revStr('cat'));