import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState();

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json);
      })
  }
  return (
    <div className="App">
      <h1>Photo List</h1>
      {/* 비동기 데이터 부르기 */}
        <button onClick={fetchData}>서버에서 불러오기</button> 
      {/* 상태확인하고 불러와야 오류 안 뜸   */}
      <ul>
        { data ? 
          data.map(post => {
            return(
            <li key={post.id}>
              <p>{post.id}: {post.title}</p>
              <img src={post.thumbnailUrl} className='imageThumbnail'/>
            </li>
            )
          }) 
        : null 
        }
      </ul>
    </div>
  )
}

export default App
