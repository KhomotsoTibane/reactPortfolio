import React from "react"
import {BsGithub} from "react-icons/bs"
import {FaLinkedin} from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className="app__socials">
      <a href="https://www.linkedin.com/in/khomotso-tibane-753b0186/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
      <a href="https://github.com/KhomotsoTibane" target="_blank" rel="noreferrer"><BsGithub/></a>  
    </div>
  )
}

export default SocialMedia

