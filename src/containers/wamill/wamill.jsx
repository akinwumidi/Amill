import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import { Feature } from '../../components'
import './wamill.css'
const Wamill = () => {
  const amill__wamillIconstyle = {
    margin: '0 10px',
    color: 'var(--color-subtext)',
  }
  return (
    <div className="gradient__bg amill__wamill" id="whatamill">
      <div className="amill__wamill-feature">
        <Feature
          flexdirection={'row'}
          title={'What is Amill'}
          content={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eos optio amet minima aliquid corrupti molestias excepturi, a laboriosam in! Veniam repudiandae voluptatum quo nobis fugiat, temporibus odio dolores iure?Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eos optio amet minima aliquid corrupti molestias excepturi, a laboriosam in! Veniam repudiandae voluptatum quo nobis fugiat, temporibus odio dolores iure?'
          }
        />
      </div>
      <div className="amill__wamill-intro">
        <h1 className="gradient__text">
          Get Immersed In <br />
          The world of Unlimited Explorations
        </h1>
        <p className="gradient__text p__explore">
          Explore Our Library
          <RiArrowRightLine style={amill__wamillIconstyle} />
        </p>
      </div>
      <div className="amill__wamillFeature-list">
        <Feature
          flexdirection={'column'}
          title={'What is Amill'}
          content={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eos optio amet minima aliquid corrupti molestias excepturi, a laboriosam in! Veniam repudiandae voluptatum quo nobis fugiat, temporibus odio dolores iure?'
          }
        />
        <Feature
          flexdirection={'column'}
          title={'What is Amill'}
          content={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eos optio amet minima aliquid corrupti molestias excepturi, a laboriosam in! Veniam repudiandae voluptatum quo nobis fugiat, temporibus odio dolores iure?'
          }
        />
        <Feature
          flexdirection={'column'}
          title={'What is Amill'}
          content={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eos optio amet minima aliquid corrupti molestias excepturi, a laboriosam in! Veniam repudiandae voluptatum quo nobis fugiat, temporibus odio dolores iure?'
          }
        />
      </div>
    </div>
  )
}

export default Wamill
