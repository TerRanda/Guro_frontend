import React from 'react'
import './App.css'
//자식컴포넌트!
import ColorButton from './components/ColorButton'
import CuteList from './components/Foods'

function App() {
  return (
    <>
    {/* <a href='http://localhost:5173/#'>누르면이동을해버렷</a>
    <ColorButton bgColor="red" color="white">클릭시이동</ColorButton>
    <ColorButton bgColor="green" color="white" text="구매하기"/>
    <ColorButton bgColor="yellow" color="black" text="찜"/> */}

    <CuteList>
      <li style={{
        listStyle: "none",
        fontSize: "30px",
        margin: "20px"
    }}>❤귀요미 명단💕</li>
      
      <img src='./image/현국형님.png'></img>
      <li style={{
        listStyle: "none"
    }}>🥇1등: 나눙36짤 귀요미 꾹이(*/ω＼*)</li>
      <li style={{
        listStyle: "none"
    }}>
      큐트리스트에내이름이빠지면앙대앙대(┬┬﹏┬┬)
      </li>
      <img src='./image/태리.jpg'></img>
      <li style={{
        listStyle: "none"
    }}>🥈2등은 태리꼬야!</li>
    <img src='./image/란다.jpg'></img>
      <li style={{
        listStyle: "none"
    }}>🏆란다는 집사마음속 1등..!💗💖</li>
    </CuteList>
    </>
  )
}

export default App