'use strict'
function log(idea){
  console.log(idea);
}


// 고차 함수(Higher-Order Function)
/*
고차 함수는 함수를 인자로 받거나 또는 함수를 반환함으로써 작동 하는 함수를 말합니다. 
간단히 말하자면, 고차 함수는 함수를 인자로 받거나 함수를 출력(output)으로 반환하는(return) 함수
*/
function formalGreeting() {
  console.log('How are you?');
}

function casualGreeting() {
  console.log("What's up?");
}

function greet(type, greetFormal, greetCasual) {
  if(type === 'formal') {
    greetFormal();
  } else if(type === 'casual') {
    greetCasual();
  }
}

// prints "What's up?"
greet('casual', formalGreeting, casualGreeting);

// 고차 함수 아닌 함수로 작성
const arr1 = [1, 2, 3];
const arr2 = [];

for(let i=0; i<arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
// prints [2, 4, 6]
console.log(arr2);


//고차 함수
const arr3 = arr1.map(function(item){
  return item * 2;
});
log(arr3);

// arrow function
const arr4 = arr1.map(item => item * 2);
log(arr4);

//-----------

// 고차 함수 아닌 함수로 작성
const birthYear = [1975,1997,2002];
const ages = [];
for(let i=0; i<birthYear.length; i++){
  let age = 2018 - birthYear[i];
  ages.push(age);
}
// prints [43, 21, 16, 23, 33]
log(ages);


//고차 함수
const ages2 = birthYear.map(year => 2018 - year);
log(ages2);



// Array.prototype.filter
/*
filter() 메소드는 콜백 함수에 의해 제공된 테스트를 통과한 모든 엘리먼트를 가진 새로운 배열을 만들어냅니다. 
filter() 메소드로 넘겨진 콜백 함수는 3가지 인자를 받습니다: element, index,array를 받습니다.
*/
// 고차 함수 아닌 함수로 작성
const persons = [
  { name: 'Peter', age: 16 },
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 24},
];
const fullAge = [];
for(let i = 0; i < persons.length; i++) {
  if(persons[i].age >= 18) {
    fullAge.push(persons[i]);
  }
}
console.log(fullAge);

//고차 함수
const fullAge2 = persons.filter(persons => persons.age >= 18);
log(fullAge2);


// Array.prototype.reduce
/*
reduce 메소드는 호출하는 배열의 각각의 멤버에 대해서 콜백 함수를 실행하고 하나의 결과 값만 내보냅니다. 
reduce 메소드는 2가지 파라미터를 받습니다. 1) 리듀서 함수 (콜백), 2) 초기값(initialValue) 옵션

리듀서(콜백) 함수는 4가지 파라미터를 받습니다: accumulator, currentValue, currentIndex, sourceArray.

만일 initialValue가 제공되었다면, 그 후에 accumulator는 initialValue와 같아지고 currentValue는 배열의 첫번째 값과 동일할 것입니다.

만일 intialValue가 제공되지 않았다면, 그 후에 accumulator는 배열의 처음 요소와 동일해지고 currentValue는 배열의 두번째 요소와 같아질 것입니다.
*/

//고차 함수로 작성
const arr5 = [5, 7, 1, 8, 4];
const sum = arr5.reduce((acc,currValue) => acc+currValue);
log(sum);


const sum2 = arr5.reduce((acc,currValue)=> acc+currValue,10);//초기값 10
log(sum2);


const strArray = ['js','python','php','java'];

function mapForEach(arr, fn) {
  const newArray = [];
  for(let i=0; i<arr.length; i++){
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;
}

const lenArray = mapForEach(strArray, function(item) {
  return item.length;
});

// prints [10, 6, 3, 4, 1]
log(lenArray);