import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

import footerBanner from '../styles/FooterBanner.module.css';

const FooterBanner = ({ footerBanner: {
  discount,
  largeText1,
  largeText2,
  saleTime,
  smallText,
  midText,
  desc,
  buttonText,
  image } }) => {
  return (

    <div className={footerBanner.container}>
      <div className={footerBanner.content}>
        <div className={footerBanner.left}>
          <p>{discount} rabatt</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>

        <div className={footerBanner.center}>
          <img
            src={urlFor(image)}
            className={footerBanner.image}
          />
        </div>

        <div className={footerBanner.right}>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={"/product/${product}"}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default FooterBanner