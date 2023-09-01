import { useState } from 'react'
import './App.css'

function App() {
  
  const[ location, setLocation ] = useState(''); // 검색어
  const[ weather, setWeather ] = useState(null); //날씨 데이터 null 값이 비었음을 명시적 선언.

  //날씨 api 요청함수
  const fetchWeather = () => {
    const apiKey = '349d43ee09d264a12a0d49e2bc5b4a0d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${'seoul'}&appid=${apiKey}`;

    fetch(url)
      .then(response => response.json())//json 포맷으로 변환 한번 시켜야함.
      .then(data => {
        console.log(data);
      })
  }
    fetchWeather();
  return (
   <>
   <div className='App'>
      <h1>Weather App</h1>
      <h1>{fetchWeather}</h1>
   </div>
   </>
  )
}

export default App
