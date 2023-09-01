import React from 'react'
import './App.css'
import logo from './assets/react.svg'
import Pokemons from './components/Pokemons'

function App() {
  return (
    <>
      <section className='title-bg'>
        <h1>점!심!</h1>
        <img src={logo}/>
        {/* public image 경로 */}
        {/* <img src="/image/001701.png"/> */}

        
      </section>
      <Pokemons />
    </>
  )
}

export default App