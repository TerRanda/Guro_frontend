import { useState } from 'react'
import './App.css'

function App() {
  const num = [1,2,3];
let result = num.map((n) => {
  console.log(n);
  return n;
})
const posts = [
  '첫글' ,'두글','셋글'
]
  console.log(result);

  return (
    <>
      <h1> 졸리다......  </h1>  
      {
        // i:자료의 배열번호
        posts.map((post, i)=> {
          return(
            <p key={i}>{post}</p>
          )
        })
      }
    </>
  )
}

export default App
