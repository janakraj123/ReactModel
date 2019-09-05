import React,{Component} from 'react'

class Second extends Component{
    constructor(props){
        super(props);
        this.state={
            color:"Red"
        }
    }
    shouldComponentUpdate(){
       return true
    }
    changeColor=()=>{
        this.setState({
            color:"Green"
        })
    }
    render(){
        return(
            <div>
                <h2>My Color: {this.state.color}</h2>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}
export default Second