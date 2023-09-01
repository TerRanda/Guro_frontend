import { useState } from 'react'
import './App.css'
//자식컴포넌트 임포트.
import Modal from './components/Modal'
function App() {
  //자식이 부모한테 바꿔달라고 요청하는 방식
  //
  const[ modal, setModal ] = useState();

  return (
    <>
      <h1>App</h1>
      <button onClick={() => {setModal(true)}}>열기</button>
      { 
        // 부모에서 변경하는 props를 위임.
        modal ? <Modal setModal={setModal}/> : null
      }
    </>
  )
}

export default App
