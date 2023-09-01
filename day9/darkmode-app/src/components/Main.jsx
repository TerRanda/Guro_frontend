import { useContext } from 'react'
import { Context } from '../Context'

function Main() {
  const { darkmode, img, fofo } = useContext(Context);
  return (
    <main className={darkmode ? 'App darkmode' : 'App'}>
      <h1>
        {
          fofo ? '태리다멍' : '테르다냥'
        }
      </h1>
      <img className='img' src={img ? './images/terry.png' : './images/Ter_20230616_154704346_01-removebg-preview.png'}/>
    </main>
  )
}

export default Main