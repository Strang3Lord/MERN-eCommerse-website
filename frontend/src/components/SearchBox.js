import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      {/* <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-5 ml-sm-5'
      ></Form.Control>
      <Button
        type='submit'
        variant='outline-success'
        className='btn btn-outline-success'
      >
        Search
      </Button> */}
      <div class='mx-auto input-group mb-3'>
        <input
          type='text'
          name='q'
          className='form-control'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Product...'
          aria-label="Recipient's username"
          aria-describedby='button-addon2'
        />
        <button class='btn btn-primary' type='submit' id='button-addon2'>
          Search
        </button>
      </div>
    </Form>
  )
}

export default SearchBox
