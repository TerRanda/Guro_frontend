import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Navbar from './components/Navbar'


function App() {
  const [ data, setData ] = useState();
  
  const API_KEY = 'nb2rZ9RMjvZw5AHJpV%2F4NJMUR2Ee73GoYFiO9NZ5ZlWZ5GBpDBBSnyWuDVgz2BlpLhb9v17t%2B1FEFUxjEMOheg%3D%3D';
  const API_URL = `https://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?serviceKey=${API_KEY}&returnType=json&numOfRows=10&pageNo=1&year=2023&itemCode`;
  
  const fetData = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      console.log(data);
  }
  //시작할 때만 실행.
  useEffect(() => {
    fetData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar/>
      {/* <button onClick={fetData}>요청</button> */}
      <Routes>
        <Route path='/' element={<Home data = {data}/>}/>  
        <Route path='/detail' element={<Detail/>}/>  
      </Routes> 
    </BrowserRouter>
  )
}

export default App
