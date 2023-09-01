import { useState, useEffect } from 'react'
import './App.css'
//자식컴포넌트 임포트.

function App() {
  console.log('App 랜더링');
  
  const [ count, setCount ] = useState(0);

  const addCount = () =>{ setCount(count + 1) };

  //useEffect 문법!
  //useEffect(함수 , [상태변수]);
  //앱이 시작되면 한 번 실행함. count 변수가 업데이트 될 때 실행됨.
  useEffect(() => {
    console.log('ㅇㅅㄴㅅ!');
  }, [count]);

  return (
    <>
      <h1>App</h1>
      <p>{count}</p>
      <button onClick={addCount}>업!</button>
    </>
  )
}

export default App
