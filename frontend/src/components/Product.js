import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'
import 'animate.css'

const Product = ({ product }) => {
  return (
    <>
      <Link className='cardText' to={`/product/${product._id}`}>
        <Card
          style={{
            width: '100%',
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
          id='productCard'
          // style={{ backgroundColor: 'rgba(249, 255, 218, 0.8)' }}
          className=' my-3 rounded  animate__animated animate__fadeInUp'
        >
          <Link to={`/product/${product._id}`}>
            <Card.Img src={product.i1} variant='top' />
          </Link>

          <Card.Body>
            <Card.Title className='cardText'>{product.name}</Card.Title>

            <Card.Text as='h6'>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </Card.Text>

            <Card.Text as='h5'>Rs.{product.price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  )
}

export default Product
