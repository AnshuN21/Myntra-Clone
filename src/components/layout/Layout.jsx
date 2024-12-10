/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'


const Layout = ({ children }) => {
  return (
    <div>
    <Navbar />

    <div className='content'>
         {children}
    </div>
      <Footer />
    </div>
  )
}

export default Layout
