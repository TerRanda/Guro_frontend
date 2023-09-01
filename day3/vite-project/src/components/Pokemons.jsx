import React from 'react'

function Pokemons() {
  // src대신 아이디값으로 줘야하나보다.
  const lunch = () => {
    
    if(className == 'item1'){
      alert(`참새밥을 줬다!!`)
    } else if(className == 'item2') {
      alert(`나비밥을 줬다!!`)
    }
    
  }
  return (
    <div className='container'>
      <h1>Pokemons</h1>
      <div className='pokemon-list'>
        <div className='item1' onClick={lunch}>
          <img src='/image/001701.png' />
        </div>
        <div className='item2' onClick={lunch}>
          <img src='/image/001202.png' />
        </div>
        <div className='item3' onClick={lunch}>
          <img src='/image/005201.png' />
        </div>
        <div className='item4' onClick={lunch}>
          <img src='/image/005401.png' />
        </div>
      </div>
    </div>
    
  )
}

export default Pokemons