import React,{useEffect}from 'react'
import './experience.css'


const experience = () => {

  useEffect(() => {
    console.log('Loading TagCanvas...');
    const TagCanvas = window.TagCanvas;
    console.log(TagCanvas);
    const tagCanvasOptions = {
      textColour: '#08FDD8',
      outlineThickness: 0.5,
      outlineColour: '#4db5ff',
      maxSpeed: 0.06,
      freezeActive: true,
      shuffleTags: true,
      shape: 'sphere',
      zoom: 1,
      wheelZoom: false,
      noSelect: true,
      textFont: null,
      freezeDecel: true,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      depth: 1,
    };
    try {
      TagCanvas.Start('tagcanvas', 'tags', tagCanvasOptions);
    } catch (e) {
      console.log('Canvas error.');
      console.log(e);
    }
  }, []);

  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2> 
      <div className="app__experience-container app__container">
        <div className="app__experience-left">
          <p>Over the past years I have made the effort to try and refine my knowledge in the languages already I know, to learn new languages and technologies within the tech environment. Here is a list of the languages and concepts that I have covered on my journey thus far:
          </p>
        </div>
        <div className="app__experience-right">
            <h3>Technologies</h3>
            <canvas width="400px" height="400px" id="tagcanvas" className='app__experience-tagCanvas'>
              <ul id="tags">
                <li className="app__text-light"><p>HTML</p></li>
                <li className="app__text-light"><a href="#" target="_blank">CSS</a></li>
                <li className="app__text-light"><a href="#" target="_blank">Javascript</a></li>
                <li className="app__text-light"><a href="#" target="_blank">Java</a></li>
                <li className="app__text-light"><a href="#" target="_blank">C#</a></li>
                <li className="app__text-light"><a href="#" target="_blank">Mongo db</a></li>
                <li className="app__text-light"><a href="#" target="_blank">TypeScript</a></li>
                <li className="app__text-light"><a href="#" target="_blank">Python</a></li>
                <li className="app__text-light"><a href="#" target="_blank">Sass</a></li>
                <li className="app__text-light"><a href="#" target="_blank">Bootstrap</a></li>
                <li className="app__text-light"><a href="#" target="_blank">Node Js</a></li>
                <li className="app__text-light"><a href="#" target="_blank">JQuery</a></li>
                <li className="app__text-light"><a href="#" target="_blank">Git</a></li>
                <li className="app__text-light"><a href="#" target="_blank">React Js</a></li>
                <li className="app__text-light"><a href="#" target="_blank">jwt Authentication</a></li>
                <li className="app__text-light"><a href="#" target="_blank">GitHub</a></li>
              </ul>
            </canvas>
        
        </div>
      </div>
    </section>
  )
}

export default experience