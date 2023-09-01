//함수표현식

let log = (msg) => {
  console.log(msg);
};
log("hello");

//함수에 객체 넣기

const car = {
  cName: "차종은 소나타입니다.",
  msg(cName) {
    console.log(cName);
  }
};
// msg: (name) => {
//   console.log(name)
// }
car.msg(car.cName);

//함수에 함수를 전달
//재료가 함수
const 요리 = (재료) => {
  return 재료();
};

const 재료 = () => {
  return "당근";
};

console.log(요리(재료));

setTimeout(function () {
  console.log("1초 경과");
}, 1000);

//숫자 배열에서 짝수만 필터링

const 짝수만 = (numbers) => {
  let result = numbers.filter((num) => {
    return num % 2 === 0;
  });
  return result;
};

const numbers = [1, 2, 3, 4, 5, 6];
const 짝수 = 짝수만(numbers);
console.log(짝수);

//비동기 = 순서 기다리지 않고 진행. 
//콜백버전
function 주문(메뉴, callback) {
  let order;
//주문처리
  setTimeout(function(){
    order = `주문완료: ${메뉴}`;
    //결과함수
    //console.log(order); //안쪽에 작성해줘야 2초후에 뜸.
    callback(order);
  }, 2000);

  //return order; //주문결과가 비동기에서는 먼저 실행되어버림.
}
function 주문완료(order){
  console.log(order);
}
console.log(주문('햄버거', 주문완료));

//비동기적 함수...ES6 버전 Promise 문법
function foodOrder(food) {
  return new Promise((resolve, reject) => {
    //비동기코드작성부분
    setTimeout(() => {
      const 주문상태 = 3; //응답메시지
      
      if(주문상태 == 1) {
        resolve('맛있게드세요');
      } else if(주문상태 == 2) {
        resolve('인내심기르는중');
      } else {reject('순두부없어요');}
    }, 2000);
  })
}
foodOrder('순두부찌개')
  .then((결과) => console.log(결과)) //성공시, ((결과)) 매개변수 () 생략가능 ( 결과 => ) 식으로 작성가능.
  .catch((실패) => console.log(실패)); //실패시





  function searchProducts (animal) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const animals = ['테르', '란다', '태리'];
        const filterAnimals = animals.filter(product =>
          product.toLowerCase().includes(animal.toLowerCase()));
          resolve(filterAnimals);
      }, 2000)
    }
    )};
    
    searchProducts('태리')
    .then(res => { 
      if(res == '테르'){
        console.log("테르다냥");
      } else if(res == '란다'){
        console.log("란다다냥");
      } else if(res == '태리'){
        console.log('태리다멍');
      }
    })
    .catch(실패 => console.log('실패!'));