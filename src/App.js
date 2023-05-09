import './App.css';
import React, {useState} from 'react'
import Typist from 'react-typist';
import oceanWaves from './Static/ocean_waves.wav'
import img1 from './images/start/IMG_8829.jpg'
import img2 from './images/start/f990ff52.jpeg'
import img3 from './images/start/IMG_1691.jpg'
import img4 from './images/start/IMG_1835.jpg'

import img5 from './images/start/IMG_2442.JPG'
import img6 from './images/start/IMG_5945.JPG'
import img7 from './images/start/IMG_6680.jpeg'
import img8 from './images/start/IMG_6695.JPG'

import img9 from './images/start/IMG_6697.JPG'
import img10 from './images/start/IMG_6699.JPG'
import img11 from './images/start/IMG_6700.JPG'
import img12 from './images/start/IMG_6702.jpeg'


function App() {
  const [startStatus, setstartStatus] = useState(false)
  const audio = new Audio(oceanWaves)
  audio.loop = true
  audio.volume = 0.3
  audio.autoplay=true

  let changestart=()=>{
    setstartStatus(true)
  }

  if (!startStatus){
    return(
      <>
      <div id="start_home">
        <div class="imgs_layout">
          <img class="imageItems" src={img1} alt=""/>
          <img class="imageItems" src={img2} alt=""/>
          <img class="imageItems" src={img3} alt=""/>
          <img class="imageItems" src={img4} alt=""/>
        </div>

        <div class="imgs_layout">
          <img class="imageItems" src={img5} alt=""/>
          <img class="imageItems" src={img6} alt=""/>
        {/* </div> */}

        <div id="start_background">
        <button id="start_button" onClick={changestart}>START</button>
        </div>

        {/* <div class="imgs_layout"> */}
          <img class="imageItems" src={img7} alt=""/>
          <img class="imageItems" src={img8} alt=""/>
        </div>

        <div class="imgs_layout">
          <img class="imageItems" src={img9} alt=""/>
          <img class="imageItems" src={img10} alt=""/>
          <img class="imageItems" src={img11} alt=""/>
          <img class="imageItems" src={img12} alt=""/>
        </div>
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
