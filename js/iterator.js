'use strict'

function log(idea){
  console.log(idea);
}

//javascript 의 collection을 반복하는 새로운 방법.
/*
iterable은 자신의 원소들이 외부에서 접근 가능하도록 만들길 원하는 자료 구조입니다. 
키가 Symbol.iterator인 메소드를 구현함으로써 원소들이 외부에서 접근 가능하도록 만듭니다. 
Symbol.iterator 메소드는 iterator를 위한 공장이라고 보면 됩니다. iterator들을 만들어냅니다.

iterator는 자료 구조의 원소들을 순회할 수 있는 포인터입니다.
*/

// Iterable
/*
- 배열과 타입이 정해진 배열
- 문자열 - 각 문자 또는 유니코드 코드-포인트를 반복합니다.
- 맵 - 키-값 쌍을 반복합니다.
- 셋 - 원소를 반복합니다.
- arguments - 함수의 배열과 같은 특별한 변수를 반복합니다.
- DOM 원소들
*/
// js에서 interables 을 인자로 사용하는 생성자들
//for-of 반복 
//for-of 반복은 반복 가능한 것을 필요로 합니다. 반복이 불가능하면 for-of는 TypeError를 던짐
const array = ['a', 'b', 'c', 'd', 'e'];
const iterator = array[Symbol.iterator]();

const newArray = [1];

for (let nextValue = iterator.next(); nextValue.done !== true; nextValue = iterator.next()) {
  newArray.push(nextValue.value);
}
log(newArray);
newArray.push(2)
log(newArray);
newArray.push(3)
log(newArray);


console.clear();
//제너레이터(Generator)
// 중간에 멈출 수 있는 함수, 멈춘 부분부터 다시 실행을 할 수 있습니다.
//제너레이터는 아이터레이터 작성 작업을 간단하게 해줄 수 있는 함수들의 특별한 클래스입니다.
//제너레이터는 하나의 값 대신에 결과의 순서를 생성하는 함수입니다. 이를테면 제너레이터는 값의 시리즈를 만들어(generate) 냅니다
function * generatorFunction() { // Line 1
  console.log('This will be executed first.');
  yield 'Hello, '; // Line 2

  console.log('I will be printed after the pause');
  yield 'World!' ;
}

const generatorObject = generatorFunction(); // Line 3

console.log(generatorObject.next().value); // Line 4
console.log(generatorObject.next().value); // Line 5
console.log(generatorObject.next().value); // 모든 함수가 명시된 return값이 없다면 묵시적으로 undefined를 반환

// function keyword와 * 그리고 함수 이름 사이에는 얼만큼의 빈공간이든 들어올 수 있습니다.
// 왜냐하면 이건 그냥 함수이고, 함수가 사용되는 곳이면 어디서든 사용할 수 있습니다. 예를 들면, 오브젝트 내부 그리고 클래스 메소드로도 사용 가능합니다.

/*
함수의 바디 부분 내부에서, 우리는 return 키워드를 사용하지 않습니다. 
그 대신에, 우리는 yield라는 키워드를 대신 사용합니다. (Line 2) yield라는 키워드는 제너레이터가 멈추게 할 수 있는 연산자(operator)입니다. 
제너레이터가 yield를 만날 때마다, 제너레이터는 yield 뒤에 기재된 값을 반환합니다. 이번 경우에는 Hello, 라는 값이 반환되었습니다. 
하지만, 우리는 제너레이터의 맥락에서는 "반환(리턴)되었다." 라는 표현을 쓰지 않습니다. 
우리는 대신에 "제너레이터가 Hello, 라는 값을 yield(생산) 했다." 라고 말합니다.

제너레이터에서 물론 값을 그냥 반환(return)하는 것도 가능합니다. 
하지만, return은 done 프로퍼티를 true로 설정합니다. 
그래서 그 이후로는 제너레이터는 어떠한 값도 generate(생산)해낼 수 없습니다.
*/

function * generatorFunc(){
  yield 'a';
  return 'b';
  yield 'c'; //영영 실행될 수 없음
}


// Iterable 예제
const iterableObj = {
  [Symbol.iterator](){
    let step = 0;
    return {
      next(){
        step++;
        if(step===1){
          return { value:'This', done: false};
        }else if(step===2){
          return { value:'is', done:false};
        }else if(step===3){
          return {value:'iterable', done:false};
        }
        return {value:'',done:true};
      }
    }
  }
}

for (const val of iterableObj){
  log(val);
}


