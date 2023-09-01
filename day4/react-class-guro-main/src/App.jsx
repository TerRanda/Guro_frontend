import { useState, useEffect } from 'react'
import './App.css'
//자식컴포넌트 임포트.

function App() {
  console.log('App 랜더링');
  
  const [ color, setColor ] = useState('white');

  return (
    <>
      <h1>Color App</h1>
      <div className='colorBox' style={{backgroundColor: color}}></div>
      <button id='pink' onClick={() => {setColor('pink')}} >Pink</button>
      <button id='green' onClick={() => {setColor('green')}}>Green</button>
      <button id='blue' onClick={() => {setColor('blue')}}>Blue</button>
    </>
  )
}

export default App

