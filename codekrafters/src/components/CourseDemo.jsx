import React from 'react'
import "../styles/CourseDemo.css"
import CourseAccordion from './CourseAccordion'
const CourseDemo = () => {
  return (
    <div className='course-demo-main'>
      <div className="headings">
        <div className="roadmap-heading">A Roadmap for Success</div>
        <div className="details">Our Comprehensive curriculum, Designed for professionals</div>
      </div>
      <div className="course-section">
        <div className="course-accordion">
          <CourseAccordion/>
        </div>
      </div>
    </div>
  )
}

export default CourseDemo