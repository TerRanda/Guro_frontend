import { React, useState } from 'react'
import './App.css'
//자식컴포넌트!


function App() {
  const [ count, setCount ] = useState(0);

  // let count = 0;
  
     const addCount = () => {
       setCount(count + 1);
     }
  // 콘솔로는 값이 증가하지만 화면으로는 0임.

  


  return (
    <>
    <h1>Counter App</h1>
    <p>{count}</p> 
    <button onClick={addCount}>누르면</button>
    <Modal />
    </>
  )
}

export default App