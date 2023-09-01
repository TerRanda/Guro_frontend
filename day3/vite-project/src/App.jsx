import { React, useState } from 'react'
import './App.css'
//자식컴포넌트!


function App() {

  //열림: true , 닫힘: false
  const [modal, setModal] = useState(false); //기본값 닫힘.


   return(
    <>
      <h1>APP</h1>

      {/* 컴포넌트 안쓰면 이렇게써야됨. if문 */}
      { modal ?
       (
        <div className='modal'>
          <h2>모달창</h2>
          <p> 알려줄 내용 </p>
          <button className="btn" onClick={() => {setModal(false)}}>닫기</button>
      </div>
       ) 
        : null
      }
      

      <button className="btn" onClick={() => {setModal(true)}}>모달창 열기</button>
    </>
   )
}

export default App