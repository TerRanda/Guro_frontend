//반복문

const food = ["김치전", "파전", "막걸리", "ㅈㅁㅌ"];

for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
}
//반복 + 값을 처리.ㅋㅋㅋㅋ도배
let newFood = food.map(function (값) {
  //console.log(값);
  return "맛있는" + 값; //변경처리 여기서.
});

console.log(newFood);

//필터링
//fillter() - 일치하는 자료 가져오기
//이름지을때 단수복수로 지으면 좋다아~ foods - food
let likeFood = food.filter((meal, i) => {
  //조건에 일치하는 값 반환
  console.log(`${i} : ${meal}`);
  return meal === "김치전";
});
console.log(likeFood);

const names = ["테르", "란다", "냥"];
let newCat = names.map((cat) => {
  return cat + "님";
});
console.log(newCat);

//사용자가 요청한 변수들로 객체를 생성하는 함수.
function createPerson(name, age) {
  return {
    //프로퍼티 : 값
    name: name,
    age: age,
    greet: function () {
      console.log("Hello, " + this.name);
    },
  };
}

// 객체 반환 함수
const person1 = createPerson("John", 30);
console.log(person1); // 출력: { name: 'John', age: 30 }
person1.greet(); // 출력: Hello, John

//리액트식 객체 반환
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello ${this.name}`);
    },
  };
}
const person2 = createPerson("졸림", 620);
console.log(person2);
person2.greet();
