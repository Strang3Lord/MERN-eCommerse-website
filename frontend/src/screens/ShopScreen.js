import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row, Button } from 'react-bootstrap'
import Product from '../components/Product'
import HomeLoader from '../components/Loader/HomeLoader'
import Message from '../components/Message'
import Filter from '../components/Filter'
import Loader from '../components/Loader'
import '../index.css'
import Meta from '../components/Meta'

import {
  listProducts,
  ListproductbyCg,
  Listproductbyfiter,
} from '../actions/productActions'
import SearchBox from '../components/SearchBox'

const ShopScreen = ({ match, history }) => {
  let Cg = window.location.search ? window.location.search.split('=')[1] : null
  const keyword = window.location.pathname.split('/')[2]
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const productbycg = useSelector((state) => {
    return state.ListproductbyCg
  })
  const productbyfilter = useSelector((state) => {
    return state.Listproductbyfilter
  })

  const { loading, error, products } = productbycg ? productbycg : productList

  useEffect(() => {
    if (Cg) {
      console.log(window.location.search.split('=')[0])
      if (window.location.search.split('=')[0] === '?cg') {
        dispatch(ListproductbyCg(Cg))
        console.log(products)
      } else {
        dispatch(Listproductbyfiter(Cg))
      }
    } else {
      dispatch(listProducts(keyword))
    }
  }, [dispatch, Cg, keyword])
  const [showfilter, setshowfilter] = useState(false)
  const [showsearch, setshowsearch] = useState(false)

  const filterfunc = () => {
    setshowfilter(!showfilter)
    if (showsearch) {
      setshowsearch(false)
    }
  }

  return (
    <>
      <div className='Cgfilter'>
        <Row>
          <Col sm={10} xs>
            <h1>
              {Cg ? Cg : keyword ? '*' + keyword + '* Search' : 'All'} Products
            </h1>
          </Col>

          <Col sm={2} xs>
            <div className='filtersbtn'>
              <Row>
                <Button onClick={filterfunc}> Sort By</Button>
              </Row>{' '}
            </div>
          </Col>
        </Row>

        <Row>
          <div className={`filterarea ${showfilter ? 'filter' : 'filteroff'}`}>
            <div className='sortbydiv'>
              <ul align='center'>
                <a href='?filter' class='effect-underline'>
                  Default
                </a>
              </ul>
              <ul align='center'>
                <a href='?filter=Rating' class='effect-underline'>
                  Rating
                </a>
              </ul>
              <ul align='center'>
                <a href='?filter=date' class='effect-underline'>
                  Date
                </a>
              </ul>
              <ul align='center'>
                <a href='?filter=highprice' class='effect-underline'>
                  Low to high price
                </a>
              </ul>
              <ul align='center'>
                <a href='?filter=lowprice' class='effect-underline'>
                  high to low price
                </a>
              </ul>
            </div>
          </div>
        </Row>

        <Row style={{ width: 'auto', marginBottom: '20px' }}>
          <Col sm xs className='categoryboxes'>
            <Link to='?cg'>
              <h5 align='center'>
                <a href='?cg' class='effect-underline'>
                  All
                </a>
              </h5>
            </Link>
          </Col>{' '}
          <Col sm xs className='categoryboxes'>
            <h5 align='center'>
              <a href='?cg=Small' class='effect-underline'>
                Small
              </a>
            </h5>
          </Col>{' '}
          <Col sm xs className='categoryboxes'>
            <h5 align='center'>
              <a href='?cg=Medium' class='effect-underline'>
                Medium
              </a>
            </h5>
          </Col>{' '}
          <Col sm xs className='categoryboxes'>
            <h5 align='center'>
              <a href='?cg=Keychain_CarHangings' class='effect-underline'>
                Keychain
              </a>
            </h5>
          </Col>{' '}
          <Col sm xs className='categoryboxes'>
            <h5 align='center'>
              <a href='?cg=Hoops' class='effect-underline'>
                Hoops
              </a>
            </h5>
          </Col>
        </Row>
      </div>
      {showsearch && (
        <Route render={({ history }) => <SearchBox history={history} />} />
      )}

      {loading ? (
        <div className='loading'>
          <Loader />
        </div>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={3} xs={6}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default ShopScreen
