import { useState } from 'react'
import './App.css'

function App() {
  //원본은 수정불가해서 변수를 한 번 더 만들어주는거.
  const[likes, setLikes] = useState([0, 0, 0]);
  const btnLike = (i) => {
    let copy = [...likes]; //한번 원본을 복사
    copy[i] += 1; //클릭한 버튼의 번호 증가
      setLikes(copy);
  }

  return (
    <>
      <h1> 졸리다......  </h1>  
      {
        //like = 배열값. i: 배열번호.자릿수
        likes.map((like , i) => {
          console.log(like);
          return(
            // i: 배열번호. 키값
            <div key={i}> 
              <button onClick={() => {btnLike(i)}}>좋아요</button>
              <span>{likes[i]}</span>
            </div>
          )
        })    
        
      }
    </>
  )
}

export default App
