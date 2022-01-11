import React from 'react'

const Filter = ({ classac }) => {
  return (
    <div className={`filterarea ${classac}`}>
      <div className='sortbydiv'>
        <h1> Sort By</h1>
        <ul>
          <li className='lined'>Default</li>
          <li className='lined'>Rating</li>
          <li className='lined'>Date</li>
          <li className='lined'>Low to high price</li>
          <li className='lined'>high to low price</li>
        </ul>
      </div>
    </div>
  )
}

export default Filter
