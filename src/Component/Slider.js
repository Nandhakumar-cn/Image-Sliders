import React from 'react'
import data from './imagedata'
import "./Slider.css"
export default function Slider(props) {
    const slide = data.map((e,index)=>{
        return <div key = {index} className={index === props.slideIndex ? "myslides fade" : "myslidesnone"}>
            <img src={e.src} alt={e.caption} />     
            <div className='text'><span className='cap'>name:{e.caption}</span>  <br></br>
                      <span className='role'>  role:{e.role} </span>   <br></br>
                        <span className='wic'>  {e.wickets}  </span> <br></br>
                        <span className='eco'> {e.economy}</span></div>
        </div >
    })
 return slide
}
