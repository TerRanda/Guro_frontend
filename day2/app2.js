//id로 문서객체 선택 = 가져오기
const titleId = document.getElementById('title');
console.log(titleId);

//class로 문서객체 가져오기

const containerClass = document.getElementsByClassName('container');
console.log(containerClass);

//querySelector() 방식 - css방식

const titleEl = document.querySelector('#title');
console.log(titleEl);

//클래스 하나만 선택
const containerEl = document.querySelector('.container');
console.log(containerEl);

//복수선택(배열)
const containerEls = document.querySelectorAll('.container');
console.log(containerEls);
console.log(containerEls[0]);
console.log(containerEls[1]);

//싱글페이지 어플리케이션 - 로딩시간 줄여줌....
//DOM 생성
//createElement('요소명') 요소를 생성
const divEl = document.createElement('div');
console.log(divEl);
//P태그 생성
const pEl = document.createElement('p');
//P태그에 텍스트 추가
pEl.innerText = "P태그 입니당."
console.log(pEl);

//div 안에 p태그 넣기 - appendChild(요소명) 
//append --- 뒤에추가
divEl.appendChild(pEl);
console.log(divEl);
//prepend -- 앞에 추가
const h2El = document.createElement('h2'); //제목 태그 형성
h2El.innerText = '생성된 제목';
h2El.textContent = '콘텐츠 변경';
divEl.prepend(h2El);
console.log(divEl);

containerEls[0].appendChild(divEl);

//버튼추가

const btnEl =  document.createElement('button');

//버튼 이름 추가
btnEl.textContent = '삭제';
console.log(btnEl);

containerEls[1].appendChild(btnEl);
//버튼 이벤트 추가 및 특정요소 삭제
const h2 = document.querySelector('.container h2');
btnEl.addEventListener('click', () => {
  console.log('click');
  //containerEls[0].remove('h2'); //container 삭제
  //containerEls[0].textContent = null; //container 내용 비우기
  //h2.parentElement.removeChild(h2);//탐색 메소드 => 삭제
  h2.parentNode.removeChild(h2);//탐색 메소드 => 삭제

});
//btn에 class 속성 추가

const btn = document.querySelector('button');
console.log('btn = ', btn);
btn.classList.add('btn');
//리액트돔
const h = React.createElement(
  'h1', //요소
  { className: 'heading'}, //속성
  '제목' //텍스트
)

ReactDOM.render(h, document.getElementById('root'));
