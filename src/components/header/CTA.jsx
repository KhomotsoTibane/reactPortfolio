import React from 'react'
import CV from '../../assets/khomotsocv.pdf'

const CTA = () => {
  return (
    <div className="app__header-cta">

        {/* <a href={CV} download className='app__btn' target="_blank" >Download CV</a> */}
        <a href="#contact" className='app__btn app__btn-primary'>Lets Chat</a>
    </div>
  )
}

export default CTA