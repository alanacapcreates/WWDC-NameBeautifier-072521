import React from "react"

function Button(props){
        return (
            <button style={props.style} onClick={props.handleClick} id = "btn">Customize</button>
        )
    
}

export default Button