import React from 'react'
import "../styles/Landing.css"
// import ContactForm from "../components/ContactFrom"
import { FaDownload } from 'react-icons/fa'
import CourseSelect from '../components/ContactFrom'
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
        <div className="right-section" id='contact-form'>
            <div className="help-title">We are here to help!</div>
            <div className="query-title">Please contact us in case of any query</div>
            <div className="input-box" id="name-input">
                <input type="text" placeholder='Your Name'/>
            </div>
            <div className="input-box" id="email-input">
                <input type="text" placeholder='Your Email'/>
            </div>
            <div className="input-box" id="phone-input">
                <input type="text" placeholder='Your Contact Number' />
            </div>
            <div className="input-box" id="select-course">
                {/* <input type="text" placeholder='Your Contact Number' /> */}
                <CourseSelect/>
            </div>
        </div>
    </div>
  )
}

export default Landing