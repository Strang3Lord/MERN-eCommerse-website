import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Button, Col, Image, Row, Table } from 'react-bootstrap'
import {
  deleteCarousel,
  createCarousel,
  listCarousels,
} from '../actions/productActions'

const CarouselScreen = ({ history }) => {
  const dispatch = useDispatch()

  const carouselList = useSelector((state) => state.carouselList)
  const { loading, error, carousels } = carouselList

  const carImageDelete = useSelector((state) => state.carImageDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = carImageDelete

  const carImageCreate = useSelector((state) => state.carImageCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    carousel: createdCarousel,
  } = carImageCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listCarousels())
    } else if (successCreate) {
      history.push(`/admin/carousel/${createdCarousel._id}/edit`)
    } else {
      history.push('/login')
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdCarousel,
  ])

  const createCarouselHandler = () => {
    dispatch(createCarousel())
  }

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure ?')) {
      dispatch(deleteCarousel(id))
    }
  }

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Carousel Pictures</h1>
        </Col>
        <Col className='text-right'>
          <Button
            style={{ float: 'right' }}
            className='my-3'
            onClick={createCarouselHandler}
          >
            <i className='fas fa-plus'></i> Create Carousel
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>PHOTO</th>
                <th>NAME</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {carousels.map((carousel) => (
                <tr key={carousel._id}>
                  <td>
                    {' '}
                    <Image src={carousel.image} alt={carousel.name} fluid />
                  </td>
                  <td>{carousel.name}</td>
                  <td>
                    <LinkContainer to={`/admin/carousel/${carousel._id}/edit`}>
                      <Button variant='light' className='btn-sm p-3 mx-3 my-3'>
                        <i className='fas fa-edit'> </i>
                        Edit
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm p-3 mx-3'
                      onClick={() => deleteHandler(carousel._id)}
                    >
                      <i className='fas fa-trash'> </i>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  )
}

export default CarouselScreen
