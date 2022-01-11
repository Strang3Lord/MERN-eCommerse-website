import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: "ChiChi's Store ",
  description: 'We sell DreamCatchers',
  keywords: 'Dreamcatcher, Small, Medium, Large, Car hangings',
}

export default Meta
