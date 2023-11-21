import React,{useState, useEffect} from 'react'
import './portfolio.css'

import data from './data'

const portfolio = () => {

  const [projects, setProjects] = useState(data);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(()=>{
    return handleWorkFilter(activeFilter);
  },[])

  const handleWorkFilter =(item)=>{
    setActiveFilter(item)

      if(item==="All"){
        setFilterWork(projects)
      }else{
        setFilterWork(projects.filter((work)=> work.tags.includes(item)))
      }

    }

  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio </h2>

      <div className="app__work-filter">
      {["Next Js", "Typescript", "React", "All"].map((item,index)=>(
      <div key={index}
      onClick={()=> handleWorkFilter(item)}
      className={`app__work-filter-item  ${activeFilter === item ? "item-active":"All"}`}
      >
      {item}

      </div>
    ))}
   </div>


      <div className="app__portfolio-container app__container">
        {
          filterWork.map(({id, image, title, github, demo})=>(
            <article key={id}>
              <div className="app__portfolio-item">
                <div className="app__portfolio-item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
              <div className="app__portfolio-item-cta">
                <a href={github} className='app__btn'  target='_blank'>Github</a>
                 {(demo.length===0)? null :  (<a href={demo} className='app__btn app__btn-primary' target='_blank'>Live Demo</a>) }
              </div>
              </div>
            </article>
          ))
        }
      </div>  
    </section>
  )
}

export default portfolio