import React from 'react'

const About = props => {
  return (
    <div id="download">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sollicitud
          faucibus</p>
        <button>{props.button}</button>
      </div>
    </div>
  )
}

export default About
