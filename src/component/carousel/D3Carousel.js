import React,{Component} from 'react';
import './D3Carousel.css'
class D3Carousel extends Component{
state={rotateX:0,rotateY:0,rotateZ:0}
componentDidMount(){
    var _this=this;
    setTimeout(function () {
        _this.setState(preState=>{return{rotateX: preState.rotateX+30 }   })
    }  ,2000)
}
    render(){
        return(<div className={'carousel-wrap'}>
           <ul style={{color:'red',transform:`rotateX:${this.state.rotateX}deg rotateY:${this.state.rotateY}deg`}}>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
           </ul>
        </div>)
    }
}
export  default D3Carousel