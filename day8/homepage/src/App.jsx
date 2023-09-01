import { useState } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
      
  )
}

export default App
