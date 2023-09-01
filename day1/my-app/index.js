//date-fns 모듈 추가. format 함수를 사용.
const { format } = require("date-fns");
const d = new Date();

const year = d.getFullYear();
const month = d.getMonth();
const date = d.getDate();

console.log(year + "년", month + 1 + "월", date + "일"); //월은 0부터 시작해서 +1 해줘야함.

const formateD = format(d, "yyyy-MM-dd"); //얘는 알아서 +1 돼서 나옴.
console.log(formateD);
