import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Card } from 'react-bootstrap'
import { Carousel, Image } from 'react-bootstrap'
import Product from '../components/Product'
import BestProducts from '../components/BestProducts'
import Message from '../components/Message'
import Filter from '../components/Filter'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import MultipleImgCarousel from '../components/MultipleImgCarousel'
import Loader from '../components/Loader'
import MenuPhoto from '../components/MenuPhoto'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  const queryParams = new URLSearchParams(window.location.search)
  const searchProductKey = queryParams.get('search')
    ? queryParams.get('search').trim()
    : ''

  return (
    <>
      <Meta />
      {!keyword ? (
        <div>
          <ProductCarousel />
        </div>
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <h1 className='homepagetext'>Categories</h1>

          <div>
            <Row xs>
              <Col>
                <MenuPhoto
                  photo='images/staple.jpg'
                  description='DREAMCATCHER'
                  to='shop?cg=Small'
                />
              </Col>
              <Col>
                <MenuPhoto
                  photo='images/staple.jpg'
                  description='CAR HANGINGS/ KEY-CHAINS'
                  to='shop?cg=Keychain_CarHangings'
                />
              </Col>

              <Col>
                <MenuPhoto
                  photo='images/staple.jpg'
                  description='WEDDING EMBRIODERY HOOPS'
                  to='shop?cg=Hoops'
                />
              </Col>
              <Col>
                <MenuPhoto
                  photo='images/staple.jpg'
                  description='ALL PRODUCTS'
                  to='shop'
                />
              </Col>
            </Row>
          </div>

          <h1 className='homepagetext'>Best Selling</h1>
          <Row>
            <BestProducts />
          </Row>

          <h1 className='homepagetext'>Shop</h1>

          <Link to='/shop' align='center'>
            <Row
              align='center'
              style={{ marginBottom: '70px', marginTop: '30px' }}
            >
              <Col align='center'>
                <div
                  style={{
                    position: 'relative',
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  {' '}
                  <img className='shopimg1' src='images/staple.jpg' />
                  <div className='menuText2'>SHOP NOW</div>
                </div>
              </Col>{' '}
              <Col align='center'>
                <div
                  style={{
                    position: 'relative',
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  <img className='shopimg' src='images/staple.jpg' />
                  <div className='menuText1'>SHOP NOW</div>
                </div>{' '}
              </Col>
            </Row>
          </Link>

          <div align='center' className='dmRow'>
            {' '}
            <h1 className='dmh1'>WANT YOUR CUSTOMISED DREAMCATCHER ?</h1>
            <div class='dmoverlay'>
              <Row align='center'>
                <Col>
                  {' '}
                  <img src='images/ig.png' className='dmphoto' />
                </Col>
                <Col>
                  <a
                    href='https://www.instagram.com/dream__filters/'
                    class='dmtext'
                  >
                    CLICK HERE TO DM ON INSTAGRAM...
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default HomeScreen
