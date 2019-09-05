import React from 'react'
import janak from "./janak.jpg"
const Gallery=()=>{
    return(
        <div>
            <h1>Welcome to Gallery Page</h1>
            <img src={janak}
                width="300px"
            />
        </div>
    )
}
export default Gallery