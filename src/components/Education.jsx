import React from 'react'
import '../styles/edu.css'
import FadeIn from './FadeIn'

const Education = () => {
  return (
    <div className='all-edu-in'>
      <FadeIn>
        <span id='about-main'>Education</span>
      </FadeIn>
      <FadeIn>
        <hr className='centered-hr' />
      </FadeIn>
      <div className="edu-cont">
        <div className="left-edu-cont"></div>
        <div className="right-edu-cont"></div>
      </div>
    </div>
  )
}

export default Education
