import React from 'react'
import "./Footer.css"
import Insta from "./instagram 1.svg"
import Whatsapp from "./phone.svg"
import Mail from "./Email.svg"


const Footer = () => {


   return (
    <div className="footer">
    <a href="https://www.instagram.com/batcave.club?igsh=MTF5MmV2N2RjNG56cg==" target="_blank" rel="noopener noreferrer">
      <img src={Insta} alt="" />
    </a>
    <a href="tel:7550057267">
      <img src={Whatsapp} alt="" />
    </a>
    <a href="mailto: info@batcave.club">
      <img src={Mail} alt="" />
    </a>
  </div>
  
  )
}

export default Footer
