import React from 'react'
import "../styles/Landing.css"
import { FaDownload } from 'react-icons/fa'
const Landing = () => {
  return (
    <div className='landing-main'>
        <div className="left-content">
            <div className="subtitle-top">Specialization over generalization</div>
            <div className="title-course">Advanced Data Science & AI Course</div>
            <div className="details-paragraph">
                Equip yourself with data science skills through live, interactive lectures guided by industry expert mentors
            </div>
            <div className="live-class-heading">
                Live Interactive Classes
            </div>
            <div className="brochure-button">
                <button>
                    <FaDownload style={{
                        height:'40px',
                        width:'40px'
                    }}/>
                    Download Brochure
                </button>
            </div>
        </div>
        <div className="center-hero-img"></div>
        <div className="right-section"></div>
    </div>
  )
}

export default Landing