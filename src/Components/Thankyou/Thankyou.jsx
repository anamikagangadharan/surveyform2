import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'

import './Thankyou.css';




const Home = () => {



  return (
    <>
      <div>
        <div className='Containertq'>

          <div className='Header'>
            <Header />
          </div>
          <div className='body' style={{margin:"0"}}>
            <div className='Head'>Thanks for taking the time to share your thoughts with us</div>
            <span  className="div2">Follow us on Instagram to stay updated on all our upcoming activities and events!</span>
          </div>
          <div className='Footer'>
            <Footer />
          </div>
        </div>
      </div>

    </>


  )
}

export default Home;
