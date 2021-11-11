import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

import './style.scss'

const View = ({ children }) => {
  return (
    <div className="l_view__wrapper">
      <Header />
      <div className="l_view__container">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default View
