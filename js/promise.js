'use strict'
function log(idea){
  console.log(idea);
}

// # Promise
/*
Pending(미결) : 여러분은 새로운 스마트폰을 가질 수 있을지 알 수 없습니다.
Fulfilled(이행) : 어머니의 기분이 괜찮아서, 스마트폰을 사줬습니다.
Rejected(거절) : 어머니가 기분이 괜찮지만, 스마트폰은 사주지 않기로 했습니다.
*/


//promise
const isMomHappy = true;

// Promise
const willGetNewPhone = new Promise(
  (resolve, reject) => {
    if (isMomHappy) {
      const phone = {
        brand: 'Samsung',
        color: 'black'
      };
      resolve(phone);
    }
    else {
      const reason = new Error('mom is not happy');
      reject(reason);
    }
  }
);

const showOff = function (phone) {
  const message = 'Hey friend, I have a new ' +
            phone.color + ' ' + phone.brand + ' phone';
  return Promise.resolve(message);
};

// call our promise
const askMom = function () {
  willGetNewPhone
    .then(showOff)
    .then(fulfilled => log(fulfilled))
    .catch(error => log(error));
};

askMom();




//ES7
/*
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

// 2nd promise
async function showOff(phone) {
    return new Promise(
        (resolve, reject) => {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};

// call our promise
async function askMom() {
    try {
        console.log('before asking Mom');

        let phone = await willIGetNewPhone;
        let message = await showOff(phone);

        console.log(message);
        console.log('after asking mom');
    }
    catch (error) {
        console.log(error.message);
    }
}

(async () => {
    await askMom();
})();
*/

console.clear();
async function f(){
  return 1;
}
//async -> promise 를 반환하는 함수라는 뜻
//promise가 아닌 것을 return 했을 때는 promise로 감싸서 resolve promise를 반환

log(f());

// # Await
//오직 async 함수 내부에서만 동작합니다.
// await 은 js가 promise가 작업 이후 결과 값을 리턴할 때까지 잠시 기다리게만듭니다.
// await은 최상위 수준(top-level) 코드에서 작동하지 않습니다.

async function f2(){
  let promise = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("done!"),1000);
  });
  let result = await promise; // promise 가 resolve될 때까지 wait(*)

  log(result);
}
f2();

// 일반적인 함수에서는 await 을 사용할 수 없음
// 비동기 함수에서 await 사용 시 문법 error (await은 오직 async function 내부에서만 작동)
// 함수 앞에 async 라는 키워드를 붙여주지 않는다면 error!
/*
function f(){
  let promise = Promise.resolve(1);
  let result = await promise; 
}
*/

// syntax error in 최상위 수준(top-level) code
/*
await은 최상위 수준(top-level) 코드에서 작동하지 않습니다.
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();
*/

(async() =>{
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
})();

// async 키워드는 2가지 효과를 가짐
// 1. 언제나 promise를 반환
// 2. 함수 내부에서 await을 사용할 수 있게 해줌
