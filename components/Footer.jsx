import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

const footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-content">
        <p>© 2022 Tropicl Apparel, Inc. All rights reserved. <br/>Developed by Ludvig Vigerust.</p>
        <p className="icons">
          <AiFillInstagram/>
          <AiOutlineTwitter/>
        </p>
      </div>
    </div>
  )
}

export default footer