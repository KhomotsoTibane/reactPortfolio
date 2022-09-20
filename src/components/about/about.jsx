import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>

      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="app__container app__about-container">
        <div className="app__about-me">
          <div className="app__about-me-image">
            <img src={ME} alt="khomotso" />
          </div>
        </div>

        <div className="app__about-content">
          <div className="app__about-cards">
            <article className="app__about-card">
              <FaAward className='app__about-icon' />
              <h5>Hyperion Web Development Graduate</h5>
              <small>2022</small>
            </article>
            <article className="app__about-card">
              <FaAward className='app__about-icon' />
              <h5>Bsc Computer Science</h5>
              <small>Current, Part-Time</small>
            </article>
          </div>

          <p>
            I am a Web Developer currently studying Computer Science part-time.
            I enjoy learning new programming technologies and I have a superior capacity for understanding concepts.
            I always aim to deliver quality solutions to problems that I am required to solve with the highest standard.
          </p>

        </div>
      </div>

    </section>
  )
}

export default about