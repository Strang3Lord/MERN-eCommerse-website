import React, { useEffect } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { Card } from 'react-bootstrap'
import { listBestProducts } from '../actions/productActions'
import Slider from 'react-slick'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const BestProducts = () => {
  const dispatch = useDispatch()
  const bestProduct = useSelector((state) => state.bestProduct)
  const { loading, error, products } = bestProduct

  useEffect(() => {
    dispatch(listBestProducts())
  }, [dispatch])

  const sliderSettings = {
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 4000,
    centerPadding: '60px',
    slidesToShow: 3,
    infinite: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <div>
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <Link to={`/product/${product._id}`}>
            <Card className='bestCard'>
              <Card.Title className='bestCardtext'>{product.name}</Card.Title>
              <Card.Img variant='top' src={product.i1} alt='' />

              <Card.Body>
                <Card.Text>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </Slider>
    </div>
  )
}

export default BestProducts
