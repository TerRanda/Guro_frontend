import App from "../App"

function ButtonGroup({ playVid, pauseVid, stopVid }) {
  return (
    <>
      <button onClick={playVid}>재생</button>
      <button onClick={pauseVid}>일시정지</button>
      <button onClick={stopVid}>정지</button>
    </>
  )
}

export default ButtonGroup