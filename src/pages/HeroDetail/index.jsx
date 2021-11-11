import React from 'react'
import { useParams, useLocation, Redirect } from 'react-router-dom'

import './style.scss'

const HeroDetail = () => {

  const params = useParams()
  const location = useLocation()
  // console.log('params', params)
  // console.log('location', location)

  const { searchParams } = new URL(window.location.href);
  const hero = searchParams.get("hero");
  const fullName = searchParams.get("full-name");
  const image = searchParams.get("image");

  // console.log('hero', hero)
  // console.log('image', image)

  if (!hero && !image) {
    return <Redirect to="/hero" />
  }

  return (
    <div className="p_hero_detail__wrapper">
      <h3>{hero}</h3>
      <p>{fullName}</p>
      <img src={image} alt="img" />
    </div>
  )
}

export default HeroDetail
