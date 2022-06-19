import React from 'react';

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

    <div className="products-background">
      <div className="text-field">
        <h2>Latest</h2>
        <p>Ate spaghetti while wearing a white shirt - didn't get sauce on it.</p>
      </div>

      <div className='products-container'>
        {products?.map(
          (product) => <Product key={product._id} product={product} />)}
      </div>

    </div>
    <div className="footer-background">
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  </div>
);


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;