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
  audio.volume = 0.01
  audio.autoplay=true

  let changestart=()=>{
    setstartStatus(true)
  }
  // could click on images to go to poem
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
          <div id="sec1">
            <div class="part1_p">
              <a className="p_button" href="/growing_up/#/p1"><span>Mi Madre</span></a>
              <p><span>
              Strong.
              <br/>
              That’s how I saw her
              <br/>
              An unstoppable woman
              <br/>
              Brave enough for anything
              </span></p>
            </div>
            <div class="part1_p">
              <a className="p_button" href="/growing_up/#/p1"><span>Mi Padre</span></a>
              <p><span>
              Cheerful.
              <br/>
              That’s how I saw him
              <br/>
              Optimistic on the worst occasions
              <br/>
              Poetic and loving of life
              </span></p>
            </div>
          </div>
         
          <p class="part1_p"><span>
          Nothing ever brought them down
          <br/>
          But then I grew up
          <br/>
          And I got to see their frown
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          Resilient.
          <br/>
          That’s who they are
          <br/>
          Finding the courage for our fulfillment
          <br/>
          Even when their happiness seems far
          <br/>
          <br/>
          Dayana Alejandro Campoverde
          </span></p>
          <div className="home_button">
            <a className="hb" href="/growing_up/#/p1"><span>
                <Typist avgTypingDelay={180}> 
                  To a Better Future...
                </Typist>
            </span></a>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
