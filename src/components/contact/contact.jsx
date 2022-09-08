import React,{useState} from "react"
import {FaLinkedin} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import "./contact.css"
import { useForm, ValidationError } from "@formspree/react";

const contact = () => {

  const [state, handleSubmit] = useForm("mknyqrrk");
  
  if (state.succeeded) {
      return <div>
      <h3 className="head-text">
        Thank you for getting in touch!
      </h3>
    </div>
  }

  return (
    <section id="contact">
      <h5>Get in Touch</h5> 
      <h2>Contact me</h2>
      <div className="max-width">  
        <div className="app__container app__contact-container">
          <div className="app__contact-options">
                     
              <article className="app__contact-option">
                <FaLinkedin className="app__contact-option-icon"/>
                <h4>LinkedIn</h4>
                <h5><a href="http://linkedin.com/in/khomotso-tibane-753b0186" target="_blank">Khomotso Tibane</a></h5>  
              </article>

              <article className="app__contact-option">
                <AiOutlineMail className="app__contact-option-icon"/>
                <h4>Khomotso13@gmail.com</h4>
              </article>

            </div>
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" className="input" required/>
                <input id="email" type="email" name="email" placeholder="Your Email" required/>
                <ValidationError  prefix="Email" field="email" errors={state.errors} />
                <textarea id="message" name="message" placeholder="Your Message" rows="6" required></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button type="submit" disabled={state.submitting} className="app__btn app__btn-primary"> Send Message</button>
              </form>
        </div>
      </div>
    </section>
  )
}

export default contact