import './App.css'
import { firstCat, sayName } from './myModule.js'
import { secondCat, sayCat } from './myModule.js'
//모듈 버전
function App() {
  let userInfo = {
    char1: '둘리',
    addr1: '쌍문동'
  }
  return (
    // 빈태그로 wrapped
    <> 
    <h1>
      {userInfo.char1}는 {userInfo.addr1}에 삽니다.  
    </h1> 

    <p>
      {firstCat}님, 안녕! 
      {secondCat}님, 안녕!
    </p>
    <p>
      {sayName(firstCat)}
      {sayCat(secondCat)}
    </p>
    </>
  )
}

export default App

//컴포넌트버전

// export default function App() {
//   let userInfo = {
//     char1: '둘리',
//     addr1: '쌍문동'
//   }
//   return (
//     // 빈태그로 wrapped
//     <> 
//     <h1>
//       {userInfo.char1}는 {userInfo.addr1}에 삽니다.  
//     </h1> 
//     </>
//   )
// };
