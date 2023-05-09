import './App.css';
import React, {useState} from 'react'
import Typist from 'react-typist';
import Sound from 'react-sound'
import oceanWaves from './Static/ocean_waves.wav'

function App() {
  const [startStatus, setstartStatus] = useState(false)
  const audio = new Audio(oceanWaves)
  audio.loop = true
  audio.volume = 0.3
  audio.autoplay=true

  let changestart=()=>{
    setstartStatus(true)
  }

  if (startStatus==false){
    return(
      <>
      <div id="start_home">
        <button id="start_button" onClick={changestart}>START</button>
      </div>
      </>
    )
  } else{
    return (
      <div>
        <div id="home_title">
          <a id="home_button" href="/growing_up/#/p1">
            <h1 id="title">
              <Typist avgTypingDelay={180}> 
                To a Better Future...
              </Typist>
            </h1>
          </a>
        {/* <button onClick={()=>{
          audio.pause()
          audioStatus=false
        }}>Pause</button> */}
        </div>
      </div>
    )
  }
}

export default App;
