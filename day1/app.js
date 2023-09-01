console.log(111);

const titleEl = document.getElementById("title");
console.log(titleEl);

const pi = 3.141592; //상수값
const _PI = Math.PI;
console.log(pi, _PI);
// Var는 중복선언 체크가 안돼서 쓰지 마라.
// let 이나 const 쓸것.

//객체나 변수에서 상수값 선언하는 경우
//배열 안에 있는 값은 변경 가능.자료형은 불변.
const animals = ["테르", "란다"];
console.log(animals);
animals[0] = "bird";
console.log(animals);

//템플릿 문자열
//옛날방식
const name = "테르";
const age = "4";
//const greeting = "안녕하세요, 저는 " + name + "이고 " + age + "살 입니다.";
//console.log(greeting);

//요즘엔 백틱 `` 사용. 변수는 ${변수} 형태로 넣어주면됨.
const greeting = `안녕하세요, 저는 ${name}이고 ${age}살 입니다.`;
console.log(greeting);

// 자바스크립트로 HTML쓰기
const contentEl = document.getElementById("content");
const title = "HTML 이란?";
// 다중문자열 - 여러줄 작성.
const html = `
<h1>${title}</h1>
<div>오 이런 방법이?</div>
<p>바로 화면에 표시가 됩니다!</p>
<p>재미땅</p>
`;
contentEl.innerHTML = html;
//contentEl.innerText = html; = 텍스트 형식으로 그냥 그대로 들어감.

const x = 3,
  y = 10;
let sum = `합계는 ${x + y}`;
console.log(sum);

//함수선언식
function add(a, b) {
  return a + b;
}

console.log(add(3, 5));

const 곱하기 = function (a, b) {
  return a * b;
};
//변수나 함수를 먼저 선언하고 사용해야함.
console.log(곱하기(3, 5));

//화살표함수
const 인사 = (_name) => {
  if (_name === undefined) {
    return (_name = "이름없음");
    //throw "이름 입력 안함"; 개발자모드에서 강제로 에러내기.
  }
  return `안녕하세요? ${_name}`;
};
console.log(인사());

//축약식
//매개변수 하나면 () 생략가능. 둘 이상이면 써야함.
const sentence1 = (inputname, age) => `Hello ${inputname} ${age}살`;
const sentence2 = (inputname, age) => {
  return `Hello ${inputname} ${age}살`;
};

console.log(sentence2("란다", 1));
console.log(sentence1("테르", 4));

//예제1
const profile = (name, age) => {
  return `${name}의 나이는 ${age} 입니다.`;
};
console.log(profile("테르란다", 5));

//분할대입

const pokemon = {
  name2: "피카츄",
  skill: "전기지짐이", // 전먹고싶다 ... 김치전!
};

// let name2 = pokemon.name2;
// let skill = pokemon.skill;

const { name2, skill } = pokemon;
console.log(`${name2}는 ${skill} 스킬을 소유`);

//배열 분할 대입

let arr = [10, 20];
let a, b, rest;
[a, b] = arr;

//a, b를 제외한 나머지는 배열로 가져옴
let arr2 = [10, 20, 30, 40, 50];
[a, b, ...rest] = arr2;
console.log(a, b, rest);

//자료
const student = {
  name3: "John Doe",
  age3: 20,
  grade: "A",
  major: "Computer Science",
};
const { name3, age3, grade, major } = student;
console.log(`이름: ${name3}, 나이: ${age3}`);

//함수의 기본값(default parameter)

const sayPokemon = (name4) => {
  console.log(`${name4}님 안녕?`);
};
sayPokemon("피카츄");

function square(number) {
  return number * number;
}
console.log(square());
console.log(square(5));
console.log(square(3));
//배열 합치기

// let arr3 = [1, 2, 3];
// let arr4 = [4, 5];
// let myarr = arr3.concat(arr4);
// console.log(myarr);

//스프레드 연산자로 배열 합치기
let arr3 = [1, 2, 3];
let arr4 = [...arr3, 4, 5, 6];

console.log(arr4);

//변수복사
let x1 = 1;
let y1 = x1; //복사: 프리미티브한 값

console.log(x1, y1);
y1 = 2;
console.log(x1, y1);
//y값이 바뀜. 별개의 값

//배열 복사(레퍼런스값)
let 원래배열 = [1, 2, 3];
let 복사배열 = 원래배열;
복사배열[0] = 1234; //원본배열도 같이 바뀌어버림. 별개의 값이 아니다. 레퍼런스를 걍 읽어오는거.
console.log(원래배열, 복사배열);

복사배열 = [...원래배열]; //배열값만 복사해오려면 이렇게 쓰는거.
console.log(복사배열);
복사배열[0] = 11;
console.log(원래배열, 복사배열); //별개의값으로 존재.
console.log(복사배열.length);

const yourArr1 = [1, 2, 3];
const yourArr2 = [4, 5, 6];

sumArr = yourArr1.concat(yourArr2);

console.log(sumArr);

//
