import React, { useState } from 'react'
import './nav.css'
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'



const nav = () => {

  const [activeNav, setActiveNav] = useState('')

  return (
    <nav>
      <div>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <span>Home</span>
      </div>
      <div>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <span>About</span>
      </div>
      <div>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <span>Experience</span>
      </div>
      <div>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen /></a>
      <span>Projects</span>
      </div>
      <div>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
      <span>Contact</span>
      </div>
    </nav>
  )
}

export default nav

{/* <nav>
      <a href="#"  onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' :''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' :''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' :''}><BiBook/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' :''}><AiOutlineFundProjectionScreen/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' :''}><BiMessageSquareDetail/></a>
    </nav> */}