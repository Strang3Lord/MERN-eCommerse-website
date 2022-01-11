import React, { useEffect } from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  DotGroup,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import { Row, Col } from 'react-bootstrap'
import { listTopProducts } from '../actions/productActions'

import { useDispatch, useSelector } from 'react-redux'

import 'pure-react-carousel/dist/react-carousel.es.css'

const MultipleImgCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return (
    <CarouselProvider
      naturalSlideWidth={15}
      naturalSlideHeight={15}
      totalSlides={2}
      playDirection='forward'
      isPlaying='true'
      touchEnabled='true'
      infinite='true'
    >
      <Slider>
        {products.map((product) => (
          <Slide>
            <Image hasMasterSpinner='true' src={product.image} alt='ha' />
          </Slide>
        ))}
      </Slider>
      <DotGroup showAsSelectedForCurrentSlideOnly='true' />
    </CarouselProvider>
  )
}

export default MultipleImgCarousel
