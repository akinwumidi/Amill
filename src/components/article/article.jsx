import React from 'react'
import './article.css'
import { RiArrowRightLine } from 'react-icons/ri'

const article = ({ ImgUrl, Date, ArticleIntro }) => {
  const Iconstyle = {
    margin: '0 10px',
    color: 'var(--color-subtext)',
  }
  return (
    <div className="article gradient__bg">
      <div className="article-container">
        <div className="article__ImageHolder">
          <img src={ImgUrl} alt={`${ArticleIntro}-blog `} />
        </div>
        <div className="article__infoHolder">
          <p>{Date}</p>
          <h2>{ArticleIntro}</h2>
          <p>
            Read more
            <RiArrowRightLine style={Iconstyle} />
          </p>
        </div>
      </div>

      <p>
        Read more
        <RiArrowRightLine style={Iconstyle} />
      </p>
    </div>
  )
}

export default article
