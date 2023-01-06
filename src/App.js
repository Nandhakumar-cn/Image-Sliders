import React, { Component } from 'react'
import './App.css'
import data from './Component/imagedata';
import Slider from './Component/Slider';


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      slideIndex:0,
      arrow:"left"
    }

  }
  componentDidMount(){
    this.timer = setInterval(()=> this.autoPlay(),5000)
  }
  autoPlay(){
    if(this.state.arrow === "left"){
      this.setState({slideIndex:this.state.slideIndex === 0 ? data.length-1 
        : this.state.slideIndex-1})
    }
  else{
    this.setState({
      slideIndex:this.state.slideIndex === data.length-1 ?
      0 : this.state.slideIndex+1
  })
  }
}
  prevSlide(){
    this.setState({
    slideIndex:this.state.slideIndex === 0 ? data.length-1 
    : this.state.slideIndex-1,
    arrow:"left"
    })
  }
  nextSlide(){
    this.setState({
      slideIndex:this.state.slideIndex === data.length-1 ?
      0 : this.state.slideIndex+1,
      arrow:"right"
    })
  }
  render(){
    return(
      <div className='App'>
      <h1>Team india - 2022</h1>
      <div className='container'>
     
       
      <div className='slide-container'>
      <Slider slideIndex ={this.state.slideIndex} />
     <span className='prev' onClick={()=>this.prevSlide()}>&#10096;</span>
     <span className='next' onClick={()=>this.nextSlide()}>&#10097;</span>

      </div>
      </div>
      </div>


    )
  }
 
}

export default App