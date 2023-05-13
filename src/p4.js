import React from "react"
import Typist from 'react-typist'

function DisplayP4(){
    console.log("in display")
    return(
        <>
        <div id="p4">
            <div id="p4_poem">
            <a id="p4_button" href="/growing_up">En El Mundo Que No Nací</a>
            <p><span>
                <br/>
                Me preguntaron como se siente
                <br/>
                What did it feel to make it?
                <br/>
                <br/>
                Este también fue su sueño
                <br/>
                Veo mi capa y duele que ustedes no son el dueño
                <br/>
                <br/>
                In a world where I wasn’t born
                <br/>
                Would you have made it?
                <br/>
                <br/>
                I know you’re proud of me
                <br/>
                But you’re the reason I got this degree
                <br/>
                <br/>
                Me preguntas cómo se siente
                <br/>
                El orgullo es obviamente
                <br/>
                <br/>
                But guilt comes second
                <br/>
                Because I wish it would have been your names mentioned
                <br/>
                <br/>
                <br/>
                Dayana Alejandro Campoverde
            </span></p>

            </div>
            <div className="home_button">
            <a className="hb" href="/growing_up"><span>
                <Typist avgTypingDelay={180}> 
                  To a Better Future...
                </Typist>
            </span></a>
          </div>
            
        </div>
        </>
    )
}

export default DisplayP4