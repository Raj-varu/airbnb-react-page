import React from 'react'
import "./navbar.css"
import logo from "../assets/airlogo.svg"


const navbar = () => {
  return (
    <div className='nav-container'>
      <img className="logo-img" src={logo} alt='Logo'></img>
    </div>
  )
}

export default navbar