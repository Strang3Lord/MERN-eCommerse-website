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
      <div
        style={{
          padding: '0 20px',
          width: 'flex',
        }}
        class='mx-auto input-group mb-9'
      >
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
