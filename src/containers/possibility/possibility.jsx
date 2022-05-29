import React from 'react'
import './possibility.css'
import posibilityImg from './../../assets/Ride-a-bicycle-cuate.svg'
// import posibilityImg from './../../assets/Ride a bicycle-cuate.png'
import { RiArrowRightLine } from 'react-icons/ri'

const possibility = () => {
  const Iconstyle = {
    margin: '0 10px',
    color: 'var(--color-subtext)',
  }
  return (
    <div className="amill__posibility-Section gradient__bg section">
      <div className="posibilityImage-holder">
        <img src={posibilityImg} alt="Posibility" />
      </div>
      <div className="posibilityItem-holder">
        <h4 className="gradient__text">
          <a href="#">
            Request early acess to get started
            <RiArrowRightLine style={Iconstyle} />
          </a>
        </h4>
        <h2 className="gradient__text">
          Experience the ultimium satisfaction from uniting with nature
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
          voluptate at, explicabo, dolorem velit non rem veritatis illum
          distinctio atque nihil repellat sed saepe. Quisquam aspernatur aliquam
          ducimus provident dolorem. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Unde, voluptate at, explicabo, dolorem velit non rem
          veritatis illum distinctio atque nihil repellat sed saepe. Quisquam
          aspernatur aliquam ducimus provident dolorem.
        </p>
      </div>
    </div>
  )
}

export default possibility
