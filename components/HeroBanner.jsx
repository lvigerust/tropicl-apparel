import React from 'react'
import Link from "next/link";

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
        <div>
          <h1>{heroBanner.largeText1}</h1>
          <h3>{heroBanner.midText}</h3>
          <p className='season-info'>{heroBanner.smallText}</p>
          <img src={urlFor(heroBanner.image)} alt="cripstop-jacket" className="hero-banner-image" />

          <div>
            <Link href={`/product/${heroBanner.product}`}>
              <button type="button">{heroBanner.buttonText}</button>
            </Link>
            <div className='desc'>
              <h5>Beskrivelse</h5>
              <p>{heroBanner.desc}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroBanner