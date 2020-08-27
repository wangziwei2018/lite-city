import React from 'react'
import { Carousel } from 'antd'
import './home.css'

const Home = () => {
  return (
    <div className="home-wrap">
      <Carousel autoplay>
        <div>
          <div className="home-image view">优美风景</div>
        </div>
        <div>
          <div className="home-image pet">可爱动物</div>
        </div>
        <div>
          <div className="home-image person">个性人像</div>
        </div>
        <div>
          <div className="home-image many">应有尽有</div>
        </div>
        <div>
          <div className="home-image welcome">欢迎使用</div>
        </div>
      </Carousel>
      <div className="home-text">
        <div>
          <div>优质</div>
          <div>Beautiful</div>
        </div>
        <div>
          <div>免费</div>
          <div>Free</div>
        </div>
        <div>
          <div>艺术</div>
          <div>Art</div>
        </div>
      </div>
    </div>
  )
}

export default Home
