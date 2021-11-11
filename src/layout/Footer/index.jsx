import React from 'react'

import { useSelector } from 'react-redux'

import './style.scss'

const Footer = () => {
  const store = useSelector((store) => store)

  return (
    <div className="l_footer__wrapper">
      Hero 20{store.date.selected} Copyright © Todos los derechos reservados
    </div>
  )
}

export default Footer
