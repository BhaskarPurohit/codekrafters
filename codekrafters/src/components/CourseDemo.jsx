import React from 'react'
import "../styles/CourseDemo.css"
import CourseAccordion from './CourseAccordion'
import dsaCoverImg from "../assets/cover-dsa.jpg"
import { Button } from '@mui/material'
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
        <div className="course-card">
          <div className="course-img">
            <img src={dsaCoverImg} alt="" />
          </div>
          <div className="buy-course-btn">
            <Button
            sx = {{
              backgroundColor:'rgb(27,152,213)',
              fontFamily:'Roboto',
              fontWeight:'bold',
              fontSize:'20px',
              width:'15vw',
              height:'6vh'
            }}
            variant='contained'>Buy Now</Button>
          </div>
          <div className="course-info">course info</div>
        </div>
      </div>
    </div>
  )
}

export default CourseDemo