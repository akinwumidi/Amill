import React from 'react'
import { Article } from '../../components'
import './blog.css'
import {
  ArticleImg1,
  ArticleImg2,
  ArticleImg3,
  ArticleImg4,
  ArticleImg5,
} from './imports'

const blog = () => {
  return (
    <div className="amill__blog-section section" id="blog">
      <h1 className="gradient__text">
        Stay up to date & connect
        <br />
        with stories from explorers around the world ...
      </h1>
      <div className="blog__article-holder">
        <div className="main__article-container">
          <Article
            Date={'May 30, 2022'}
            ArticleIntro={'The best moments of my life are ones with nature'}
            ImgUrl={ArticleImg1}
          />
        </div>
        <div className="side__article-container">
          <Article
            Date={'May 30, 2022'}
            ArticleIntro={'The best moments of my life are ones with nature'}
            ImgUrl={ArticleImg2}
          />
          <Article
            Date={'May 30, 2022'}
            ArticleIntro={'The best moments of my life are ones with nature'}
            ImgUrl={ArticleImg3}
          />
          <Article
            Date={'May 30, 2022'}
            ArticleIntro={'The best moments of my life are ones with nature'}
            ImgUrl={ArticleImg4}
          />
          <Article
            Date={'May 30, 2022'}
            ArticleIntro={'The best moments of my life are ones with nature'}
            ImgUrl={ArticleImg5}
          />
        </div>
      </div>
    </div>
  )
}

export default blog
