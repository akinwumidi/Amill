import React from 'react'
import './features.css'
import { RiArrowRightLine } from 'react-icons/ri'
import { Feature } from '../../components'

const featuresData = [
  {
    id: 0,
    title: 'Experience Natuer firsthand and see the importance',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque aliquam nemo eligendi deleniti porro omnis esse dolorem, ex natus voluptatibus debitis in soluta ad perferendis iste, temporibus molestias, voluptate veritatis!',
  },
  {
    id: 1,
    title: 'Unforgetable experiecne with nature',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque aliquam nemo eligendi deleniti porro omnis esse dolorem, ex natus voluptatibus debitis in soluta ad perferendis iste, temporibus molestias, voluptate veritatis!',
  },
  {
    id: 0,
    title: 'Experience Natuer firsthand and see the importance',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque aliquam nemo eligendi deleniti porro omnis esse dolorem, ex natus voluptatibus debitis in soluta ad perferendis iste, temporibus molestias, voluptate veritatis!',
  },
  {
    id: 1,
    title: 'Unforgetable experiecne with nature',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque aliquam nemo eligendi deleniti porro omnis esse dolorem, ex natus voluptatibus debitis in soluta ad perferendis iste, temporibus molestias, voluptate veritatis!',
  },
]
const features = () => {
  const Iconstyle = {
    margin: '0 10px',
    color: 'var(--color-subtext)',
  }
  return (
    <div className="amill__feautures-section section">
      <div className="amill__feautures-intro">
        <h1 className="gradient__text">
          Explore multiple reasons to enjoy nature today
        </h1>
        <p className="gradient__text">
          Request weekly
          <RiArrowRightLine style={Iconstyle} />
        </p>
      </div>
      <div className="amill__feautures-details">
        {featuresData.map((data) => (
          <Feature
            title={data.title}
            content={data.content}
            key={data.id}
            flexdirection={'row'}
          />
        ))}
      </div>
    </div>
  )
}

export default features
