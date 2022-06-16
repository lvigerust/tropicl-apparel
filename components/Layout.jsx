import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/> 
        <title>Tropicl Apparel</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout