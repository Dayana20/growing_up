import React from "react"
import Typist from 'react-typist'


function DisplayP3(){
    console.log("in display")
    return(
        <>
        <div id="p3">
            <a id="p3_button" href="/growing_up/#/p4">Outsider</a>
            <p><span>
            <br/>
            In a country full of opportunities
            <br/>
            I mostly saw your stumble
            <br/>
            The sadness when someone didn't understand you
            <br/>
            Made my heart crumble
            <br/>
            <br/>
            I didn't want you to feel like an outsider
            <br/>
            But I saw your struggle
            <br/>
            I know language was a huge divider
            <br/>
            <br/>
            I wanted you to bond
            <br/>
            To know that you belong.
            <br/>
            <br/>
            <br/>
            Dayana Alejandro Campoverde
            </span></p>
            <div className="home_button">
            <a className="hb" href="/growing_up/#/p4"><span>
                <Typist avgTypingDelay={180}> 
                  To a Better Future...
                </Typist>
            </span></a>
          </div>
        </div>
        
        </>
    )
}

export default DisplayP3