import React from 'react'
import "./mainimg.css"
import img from "../assets/mainimg.png"

const mainimg = () => {
  return (
    <div className='img-container'>
        <img src={img} alt='img'></img>
    </div>
  )
}

export default mainimg