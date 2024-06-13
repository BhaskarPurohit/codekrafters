import React from 'react'
import "../styles/RelatedCourseCard.css"
import { GiSandsOfTime } from 'react-icons/gi'
const RelatedCourseCard = () => {
    return (
        <div className='related-course-cards'>
            <div className="related-course-card">
                <div className="time-icon">
                    <GiSandsOfTime style={{
                        height: "40px",
                        width: "40px",
                        padding: 0,

                    }} />
                </div>
                <div className="info-title">
                    Real Work Experience
                </div>
                <div className="info-para">
                    Work with companies directly on software development projects to master your skills and build a strong project portfolio to get your.
                </div>
            </div>
            <div className="related-course-card">
                <div className="time-icon">
                    <GiSandsOfTime style={{
                        height: "40px",
                        width: "40px",
                        padding: 0,

                    }} />
                </div>
                <div className="info-title">
                    Guaranteed Job Referral
                </div>
                <div className="info-para">
                    Our program seeks to eliminate financial risk in the upskilling journey with iur guaranteed job referrals option.
                </div>
            </div>
            <div className="related-course-card">
                <div className="time-icon">
                    <GiSandsOfTime style={{
                        height: "40px",
                        width: "40px",
                        padding: 0,

                    }} />
                </div>
                <div className="info-title">
                    Crack FAANG Interviews
                </div>
                <div className="info-para">
                    Interact and Learn from mentors working in top product based companies to crack Interviews for your dream role.
                </div>
            </div>

        </div>
    )
}

export default RelatedCourseCard