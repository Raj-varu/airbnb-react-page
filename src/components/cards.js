import React from 'react'
import bike from '../assets/wedding-photography 1.png'
import star from "../assets/Star 1.png"
import "./cards.css"

const cards = (prop) => {
  

    // const mapper = api-data.map(data=>(
    //     <div className='card-container'>cards</div>
    // ))

    return(
      
      <div className='card-container'>
      <div className='status'>{prop.status}</div>
      <img className='image-tag' src={prop.img}></img>
      <div className='data-container'>
      <img src={star}></img>
      <span>{prop.rating}</span>
      <span>{prop.ratecount}.USA</span>
      <h4>{prop.title}</h4>
      <span>From${prop.price}</span> <span>/person</span>
      
      </div>
      </div>
    
      

    )
  
}

export default cards