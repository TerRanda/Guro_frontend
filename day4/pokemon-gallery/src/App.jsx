import { useState } from 'react'
import './App.css'

function App() {
  const data = [
    {
      content: "란다입니당",
      imgUrl: '/images/Randa.jpg'
    },
    {
      content: "태리입니당",
      imgUrl: '/images/Terry.jpg'
    }
  ]
  const[ home, setHome] = useState(0);
  const 번호 = home;

  return (
    <>
      <h1> 💖내새꾸자랑😘  </h1>  
      <div>
        <img src={data[번호].imgUrl}></img>
        <div>
          <p>{data[번호].content}</p>
        </div>
      </div>
      <button onClick={()=>{setHome(0)}}>란다가보고싶어요🐱</button>
      <button onClick={()=>{setHome(1)}}>태리가보고싶어요🐾</button>
    </>
  )
}

export default App
