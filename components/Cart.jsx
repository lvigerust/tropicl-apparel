import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

import cartStyles from '../styles/Cart.module.css';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading('Omdirigerer til Stripe...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className={cartStyles.cartWrapper} ref={cartRef}>
      <div className={cartStyles.cartContainer}>
        <button
          type="button"
          className={cartStyles.cartHeading}
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className={cartStyles.heading}>Handlekurv</span>
          <span className={cartStyles.cartNumItems}>({totalQuantities} produkter)</span>
        </button>

        {cartItems.length < 1 && (
          <div className={cartStyles.emptyCart}>
            <AiOutlineShopping size={150} />
            <h3>Handlekurven er tom</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className={cartStyles.btn}
              >
                Fortsett handelen
              </button>
            </Link>
          </div>
        )}

        <div className={cartStyles.productContainer}>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className={cartStyles.product} key={item._id}>
              <img src={urlFor(item?.image[0])} className={cartStyles.cartProductImage} />
              <div className={cartStyles.itemDesc}>
                <div className={cartStyles.top}>
                  <h5>{item.name}</h5>
                  <h4>{item.price} kr</h4>
                </div>

                <div className={cartStyles.bottom}>
                  <div>
                    <p className={cartStyles.quantityDesc}>
                      <span className={cartStyles.minus} onClick={() => toggleCartItemQuanitity(item._id, "dec")}>
                        <AiOutlineMinus />
                      </span>
                      <span
                        className={cartStyles.num} onClick="">
                        {item.quantity}
                      </span>
                      <span
                        className={cartStyles.plus} onClick={() => toggleCartItemQuanitity(item._id, "inc")}>
                        <AiOutlinePlus />
                      </span>
                    </p>
                  </div>
                  <button
                    type='button'
                    className={cartStyles.removeItem}
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className={cartStyles.cartBottom}>
            <div className={cartStyles.total}>
              <h3>Totalsum:</h3>
              <h3>{totalPrice} kr</h3>
            </div>
            <div className={cartStyles.btnContainer}>
              <button type='button' className={cartStyles.btn} onClick={handleCheckout}>
                Betal med kort
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart