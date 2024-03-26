import React, { useState } from 'react'
import Logo from "./Header_new_1.svg"
import './Header.css'

const Header = () => {



  return (

    <div className="container" >
        <div className="logo_container">
         <img className="logo" src={Logo} alt="" /> 
        </div>      
    </div>

  )
}

export default Header
