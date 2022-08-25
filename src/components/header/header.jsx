import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import SocialMedia from './SocialMedia'

import './header.css'

const header = () => {
  return (
    <header>
      <div className="app__container app__header-container">
        <h5>Hello I'm</h5>
        <h1>Khomotso Tibane</h1>
        <h5 className="app__text-light">Full Stack Developer</h5>
        <CTA/>
        <SocialMedia/>

        <div className="app__header-me">
          <img src={ME} alt="khomotso" />
        </div>


      </div>
    </header>
  )
}

export default header