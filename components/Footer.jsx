import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import footerStyles from '../styles/Footer.module.css';

const footer = () => {
  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.content}>
        <p>© 2022 Tropicl Apparel, Inc. All rights reserved. <br />Developed by Ludvig Vigerust.</p>
        <p className={footerStyles.icons}>
          <AiFillInstagram />
          <AiOutlineTwitter />
        </p>
      </div>
    </div>
  )
}

export default footer