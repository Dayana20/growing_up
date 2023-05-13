import React from "react"
import Typist from 'react-typist'


function DisplayP2(){
    console.log("in display")
    return(
        <>
        <div id="p2">
            {/* POEM 2: fitting in and perfection */}
            <a id="p2_button" href="/growing_up/#/p3"><h3>Weight</h3></a>
            
            <p>
                Just one more pound
                <br/>
                If I lose one more then I’ll be proud
                <br/>
                It’s not a big deal
                <br/>
                One more pound and I’ll appeal
                <br/>
                <br/>
                The blue dress is still tight
                <br/>
                One more pound and it’ll be right
                <br/>
                Why is my stomach still poking out?
                <br/>
                One more pound and I won’t shout
                <br/>
                <br/>
                I will feel pretty then
                <br/>
                I won’t cry again
                <br/>
                But why does my heart still ache?
                <br/>
                Soon I’ll be in shape
                <br/>
                <br/>
                Just one more pound.
                <br/>
                <br/>
                <br/>
                Dayana Alejandro Campoverde
            </p>
            <div className="home_button">
            <a className="hb" href="/growing_up/#/p3"><span>
                <Typist avgTypingDelay={180}> 
                  To a Better Future...
                </Typist>
            </span></a>
          </div>
        </div>
        
        </>
    )
}

export default DisplayP2