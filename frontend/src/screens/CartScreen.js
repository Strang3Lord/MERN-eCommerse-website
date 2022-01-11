import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  var totalcost = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  )
  var length = cartItems.reduce((acc, item) => acc + item.qty, 0)

  function shipper(qty, string) {
    var arr = []
    for (var i = 0; i < qty; i++) {
      arr[i] = string + ','
    }
    return arr
  }

  function final(arr) {
    var sum = 0
    arr[arr.length - 1] = 0
    for (var i = 0; i < arr.length; i = i + 3) {
      sum = sum + parseInt(arr[i])
    }
    return sum
  }

  var scArray = cartItems.map((item) => shipper(item.qty, item.shipcharge))

  scArray.sort()
  scArray.reverse()

  var k = scArray.toString() + ','

  var myArray = k.split(',,')

  var sc = final(myArray)
  //var sc = myArray

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup
            style={{
              height: '100px',
              lineHeight: '100px',
              textAlign: 'center',
            }}
            variant='flush'
          >
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md>
                    <Link to={`/product/${item.product}`}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Link>
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md>Rs.{item.price}</Col>

                  <Col md>
                    <Form.Control
                      style={{ marginTop: '35px' }}
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col> Price : </Col>{' '}
                <Col>
                  {' '}
                  Rs.
                  {totalcost}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col> Shipping : </Col>
                <Col>Rs.{sc}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col> Total </Col>{' '}
                <Col>
                  {' '}
                  Rs.
                  {sc + totalcost}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
