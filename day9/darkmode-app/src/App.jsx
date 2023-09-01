import { useState, useContext } from 'react';
import './App.css';
//함수명 호출 default
import Page from './components/Page';
//변수로 호출
import { Context } from './Context';

function App() {
  const [ darkmode, setDarkmode ] = useState(false);
  const [ img , setImg] = useState(false);
  const [ fofo, setFofo] =useState(false);

  const handleDarkmode = () => {
    setDarkmode(!darkmode);
    setImg(!img);
    setFofo(!fofo);
  }
  return (
    //Context 써서 전역 state(상태)변수로 설정.
    <Context.Provider value = {{darkmode, setDarkmode, handleDarkmode, img, fofo}}> 
      <Page/>
    </Context.Provider>
    
  )
}
export default App
