import React,{Component} from 'react'

class First extends Component{
    constructor(props){
        super(props);
        this.state={
            favoriteColor:"red"
        }
    }
//   static getDerivedStateFromProps(props,state){
//     return {favoriteColor:props.favCol};
// }
componentDidMount(){
    setTimeout(()=>{
        this.setState({
            favoriteColor:"Purple"
        })
    },5000)
}

    render(){
        return(
            <div>
                <h2>My Favorite Color is:{this.state.favoriteColor}</h2>
            </div>
        )
    }
}
export default First