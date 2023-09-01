import { useState } from 'react'
import './App.css'

function App() {
  const data = [
    {
      pName: '이상해씨',
      type: '풀, 독',
      imgUrl: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000701.png'
    },
    {
      pName: '파이리',
      type: '불꽃',
      imgUrl: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000401.png'
    },
    {
      pName: '피카츄',
      type: '귀여운 백만볼트',
      imgUrl: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002501.png'
    }
  ]

  const [ number, setNumber ] = useState(0);
  const 번호 = number;

  return (
    <>
    
      <h1> Pokemon Gallery </h1>
      <div className="gallery">
        <img src={data[번호].imgUrl} />
        <div className="info">
          <p className="pName">{data[번호].pName}</p>
          <p className="type">{data[번호].type}</p>
        </div>
        <button onClick={() => {setNumber(0)}}>이상해씨</button>
        <button onClick={() => {setNumber(1)}}>파이리</button>
        <button onClick={() => {setNumber(2)}}>피카츄</button>
      </div>
    </>
  )
}

export default App
