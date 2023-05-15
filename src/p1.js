import React from "react"
import Typist from 'react-typist';

// import img1 from "./IMG_6695.JPG"
// import img2 from "./IMG_6702.JPG"


function DisplayP1(){
    console.log("in display")
    return(
        <>
        <div id="p1">
            <a className="p_button" href="/growing_up/#/p2">Who I Am</a>
            <div id="p1_p">
            {/* <a href="/growing_up/#/p2">Who I Am.</a> */}
            {/* <img src={img1}/>
            <img src={img2}/> */}
            <p id="p1_1"><span>
            <br/>
            I am a daughter.
            <br/>
            <br/>
            I learned to be resilient
            <br/>
            <br/>
            I am a daughter.
            <br/>
            <br/>
            I love feeling pretty
            <br/>
            <br/>
            I am a daughter.
            <br/>
            <br/>
            I am smart
            <br/>
            <br/>
            I am a daughter.
            <br/>
            <br/>
            I am fearless
            <br/>
            <br/>
            I am a daughter.

            </span></p>

            <p id="p1_2"><span>
            <br/>
            But I am also human
            <br/>
            <br/>
            But I am also fragile
            <br/>
            <br/>
            But I am also a woman
            <br/>
            <br/>
            But I also love building
            <br/>
            <br/>
            But I am also a student
            <br/>
            <br/>
            But I am also anxious
            <br/>
            <br/>
            But I am also an aunt
            <br/>
            <br/>
            But I am also careful
            <br/>
            <br/>
            But I am also me.
            <br/>
            <br/>
            </span></p>
            </div>
            <p style={{backgroundColor:"white"}}>Dayana Alejandro Campoverde</p>
            <div className="home_button">
            <a className="hb" href="/growing_up/#/p2"><span>
                <Typist avgTypingDelay={180}> 
                  To a Better Future...
                </Typist>
            </span></a>
          </div>
        </div>
        </>
    )
}

export default DisplayP1