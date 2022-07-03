import React from 'react'
import './brand.css'
import { amazon, cisco, disney, netflix, sony, uber } from './imports'

const brand = () => {
  return (
    <div className="amill__brand-section containerv">
      <div>
        <img src={amazon} alt="Brand" />
      </div>
      <div>
        <img src={cisco} alt="Brand" />
      </div>
      <div>
        <img src={disney} alt="Brand" />
      </div>
      <div>
        <img src={uber} alt="Brand" />
      </div>
      <div>
        <img src={netflix} alt="Brand" />
      </div>
      <div>
        <img src={sony} alt="Brand" />
      </div>
    </div>
  )
}

export default brand
