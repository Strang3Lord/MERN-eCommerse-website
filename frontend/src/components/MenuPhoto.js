import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import 'animate.css'

const MenuPhoto = ({ photo, description, to }) => {
  return (
    <>
      <Link to={to}>
        <div
          style={{ position: 'relative', textAlign: 'center', color: 'white' }}
        >
          <img className='menuphoto' src={photo} alt='' />

          <div className='menuText'>{description}</div>
        </div>
      </Link>
    </>
  )
}

export default MenuPhoto
