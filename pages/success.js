import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runConfetti } from '../lib/utils';



const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runConfetti();
    }, []);

    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Takk for din bestilling!</h2>
                <p className="email-msg">Vi har mottatt din ordre. Se kvittering i din e-post.</p>
                <p className="description">
                    Ta kontakt på
                    <a href="mailto:kundeservice@tropicl.clothing" className="email">kundeservice@tropicl.clothing </a>
                    for spørsmål angående din ordre.
                </p>
                <Link href="/">
                    <button type='button' width="300px" className='homeBtn'>Ta meg til hjemsiden</button>
                </Link>
            </div>
        </div>
    )
}

export default Success