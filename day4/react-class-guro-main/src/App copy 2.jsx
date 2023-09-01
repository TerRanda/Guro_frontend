import { useState } from 'react'
import './App.css'
//자식컴포넌트 임포트.
import Modal from './components/Modal'
function App() {
  
  //page 번호
  const [tab, setTab] = useState(3);

  return (
    <>
      <h1>App</h1>
      <div className='tab-ui'>
        <div className='tab-group'>
          <a href="#tab1" onClick={() => {setTab(0)}}>HTML</a>
          <a href="#tab2" onClick={() => {setTab(1)}}>CSS</a>
          <a href="#tab3" onClick={() => {setTab(2)}}>JAVASCRIPT</a>
        </div>
        <div className='tab-contents'>
          {
            tab === 0 ? 
            <article id='#tab1'>
              <h1>HTML</h1>
              <p>Hyper Text Markup Language</p>
            </article>  : null         
          }
          {
            tab === 1 ? 
            <article id='#tab2'>
              <h1>CSS</h1>
              <p>Cascading Style Sheet</p>
            </article>  : null
          }
          {
            tab === 2 ? 
            <article id='#tab3'>
              <h1>JAVASCRIPT</h1>
              <p>Web Programing Language</p>
            </article>  : null
          }
          {
            tab === 3 ? 
            <article id='#tab4'>
              <h1> 
                프로그래밍 언어를 
                선택하세요
              </h1>
            </article>  : null
          }
        </div>
      </div>
    </>
  )
}

export default App
