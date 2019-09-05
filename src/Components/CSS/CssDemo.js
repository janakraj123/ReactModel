import React,{Component} from 'react'

class CssDemo extends Component{
    render(){
        const myStyle={
            color:"white",
            backgroundColor:"DodgerBlue",
            padding:"10px"
        };
        return(
            <div>
                <h1 style={myStyle}>Janak Raj Tamang</h1>
            </div>
        )
    }
}
export default CssDemo