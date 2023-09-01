import './App.css'
import Header from './components/Header';

function App() {
  const aname = '햄스터';
  const userInfo = {
    aname: '햄찌',
    age: 3
  }

  //클릭시 실행되는 함수
  const sayHello = () => {
    alert(`해바라기씨 ${userInfo.aname}에게 줬다`)
  }

  const style = {
    color: "blue",
    backgroundColor: "yellow",
    textDecoration: "underline",
    border: "1px solid",
    padding: "0px",
  }
  const btn = {
    width: "100px",
    padding: "5px",
    border: "none",
    boxShadow: "0px 1px 2px black",
    backgroundColor: "white",
    margin: "10px"
  }
  return (
    <>
      <img src='src\image\ham.jpg'></img>
      <p>나는{aname}! {userInfo.aname}</p>
      <p>{userInfo.age}살</p>
      <p style={style}>해바라기씨마시따!</p>
      <button onClick={sayHello} style={btn}>밥주기</button>
    </>
  )
}

export default App;
