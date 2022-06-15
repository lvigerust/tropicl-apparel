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
                <h2>Takk for din ordre!</h2>
                <p className="email-msg">Se kvittering på din e-post.</p>
                <p className="description">
                    Om du har noen spørsmål, vennligst ta kontakt med
                    <a href="mailto:kundeservice@tropicl.no" className="email">kundeservice@tropicl.no</a>
                </p>
                <Link href="/">
                    <button type='button' width="300px" className='btn'>Fortsett å handle</button>
                </Link>
            </div>
        </div>
  )
}

export default Success