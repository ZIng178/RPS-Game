import React from "react"
import hand from "../src/Images/hand.png"
import rock from "../src/Images/rock.png"
import paper from "../src/Images/paper.png"

const Player=({weapon})=>{
    
    return(
        <div className="app">
        <img className="hand-images" src={
            weapon === "rock" ? rock : weapon ==="scissor" ? hand :paper 
            } 
            alt="rps">

        </img>
            
        </div>
    )
}

export default Player