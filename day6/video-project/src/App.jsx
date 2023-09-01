import { useState, useEffect, useRef } from 'react'
import './App.css'
import './media/drinking.mp4'

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [ isPlaying, setIsPlaying ] = useState();


  const videoRef = useRef();
  // 비디오 재생 hook
  useEffect(() => {
    setCurrentTime(videoRef.current.currentTime); // 현재시간
    setDuration(videoRef.current.duration);

    // 비디오 메타데이터가 로드될 때 duration을 업데이트합니다.
    const handleLoadedMetadata = () => {
      setDuration(videoRef.current.duration);
    };

    videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    // 매 초마다 비디오 시간 hook
    let videoInterval = setInterval(() => {
      console.log(videoRef.current.currentTime);
      setCurrentTime(videoRef.current.currentTime);
    }, 1000);
  // clean up 인터벌 함수 제거
    return () => clearInterval(videoInterval)
  }, [currentTime]);
  
  const playVid = () => {
    videoRef.current.play();
    setIsPlaying(true);
  }
  
  const pauseVid = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  }
  const stopVid = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  }
  return (
    <div className='App'>
     <h1>React Video Player</h1>
     <video src='./media/drinking.mp4' controls ref={videoRef} className='videoInfo'></video>
     <div className="timeInfo">
      <p>{currentTime.toFixed(1)}s / {duration.toFixed(1)}s</p>
      <progress style={{width:'100%'}} min="0" max="100" value={currentTime*100/duration}></progress>
     </div>
     <div className="btnGroup">
      <button className="play" onClick={playVid}>Play</button>
      <button className="pause" onClick={pauseVid}>Pause</button>
      <button className="stop" onClick={stopVid}>Stop</button>
     </div>
    </div>
  )
}

export default App
