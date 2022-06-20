import React from 'react'
import Link from "next/link";

import { urlFor } from '../lib/client';

import heroBannerStyle from '../styles/HeroBanner.module.css';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className={heroBannerStyle.container}>
      <div className={heroBannerStyle.content}>
        <h1>{heroBanner.largeText1}</h1>
        <h3>{heroBanner.midText}</h3>
        <p className={heroBannerStyle.seasonInfo}>{heroBanner.smallText}</p>
        <img src={urlFor(heroBanner.image)} alt="cripstop-jacket" className={heroBannerStyle.image} />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className={heroBannerStyle.desc}>
            <h5>Beskrivelse</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner 