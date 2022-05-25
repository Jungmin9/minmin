'use strict'

function log(idea){
  console.log(idea);
}

//async & await
// clear style of using promise

// 1. async
/*function fetchUser(){
  // do network request in 10 secs...
  //return 'test';
  return new Promise((resolve,reject)=>{
    // do network request in 10 secs...
    resolve('test');
  });
}*/
async function fetchUser(){ //async 키워드 사용 시 promise로 만들 수 있음
  return 'test';
}

const user = fetchUser();
user.then(log);
log(user);

// 2. await
function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
  await delay(2000);
  return 'apply';
}

async function getBanana(){
  await delay(1000);
  return 'banana';
}

async function pickFruits(){
  /*return getApple().then(apple =>{
    return getBanana().then(banana => `${apple} +  ${banana}`);
  });*/
  const applyPromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applyPromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits(){
  //promise 배열을 전달하게되면, 다 받아진 배열이 전달됨.
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' and '));
}
pickAllFruits().then(console.log);


function pickOnlyOne(){
  // 배열 전달된 promise 중에 가장 먼저 완료된 것의 결과값으로 그대로 이행하거나 거부합니다.
  return Promise.race([getBanana(),getApple()]);
}
pickOnlyOne().then(console.log);

//
