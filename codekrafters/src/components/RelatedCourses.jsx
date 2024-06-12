import React from 'react'
import "../styles/RelatedCourses.css"
import RelatedCourseCard from './RelatedCourseCard'
const RelatedCourses = () => {
  return (
    <div className='related-course-main'>
        <div className="related-courses-small">Related Courses</div>
        <div className="why-join">Why Join this Program ?</div>
        <div className="course-cards">
            <RelatedCourseCard/>
        </div>
    </div>
  )
}

export default RelatedCourses