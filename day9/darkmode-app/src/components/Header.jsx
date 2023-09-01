import { useContext } from 'react'
import { Context } from '../Context'

function Header() {
  //Context 사용하기
  const { handleDarkmode, darkmode } = useContext(Context);


  return (
    <header className={darkmode ? 'darkheader' : ''}>
      <h1>밤낮으로 귀엽다</h1>
      <button className='button' onClick={handleDarkmode}>Darkmode</button>
    </header>
  )
}

export default Header