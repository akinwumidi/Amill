import React from 'react'
import './brand.css'
import { google, dropbox, atlassian, shopify, slack } from './imports'

const brand = () => {
  return (
    <div className="amill__brand-section">
      <div>
        <img src={google} alt="Brand" />
      </div>
      <div>
        <img src={shopify} alt="Brand" />
      </div>
      <div>
        <img src={slack} alt="Brand" />
      </div>
      <div>
        <img src={dropbox} alt="Brand" />
      </div>
      <div>
        <img src={atlassian} alt="Brand" />
      </div>
    </div>
  )
}

export default brand
