import React from 'react'
import './feature.css'

const Feature = ({ title, content, flexdirection }) => {
  const direction = flexdirection == 'row' ? 'row' : 'column'
  return (
    <div className={`feauture__cointainer ${direction}`}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Feature
