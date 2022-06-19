import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

import navbar from '../styles/Navbar.module.css';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (

    <div className={navbar.container}>
      <p className={navbar.logo}>
        <Link href="/">Tropicl Apparel</Link>
      </p>

      <div className={navbar.menu_list}>
        <p className={navbar.menu_list_item}>
          <Link href="/">Products</Link>
        </p>
        <p className={navbar.menu_list_item}>
          <Link href="/success">About</Link>
        </p>

        <button type="button" className={navbar.cart_icon} onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className={navbar.cart_item_qty}>{totalQuantities}</span>
        </button>

        {showCart && <Cart />}

      </div>
    </div>
  )
}

export default Navbar