import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'

const StatsInfo = () => {
  return (
    <div className='stats-info-main'>
        <div className="stats-info" id='salary-info'>
            <div className="icon" id="increase-icon">
                <FaArrowTrendUp/>
            </div>
            <div className="salary-stats">
                <div className="title" id="salary-title">126%</div>
                <div className="subtitle" id="salary-subtitle">170% Average Salary Hike</div>
            </div>
        </div>
        <div className="stats-info" id='salary-info'>
            <div className="icon" id="increase-icon">
                <FaArrowTrendUp/>
            </div>
            <div className="salary-stats">
                <div className="title" id="salary-title">126%</div>
                <div className="subtitle" id="salary-subtitle">170% Average Salary Hike</div>
            </div>
        </div>
        <div className="stats-info" id='salary-info'>
            <div className="icon" id="increase-icon">
                <FaArrowTrendUp/>
            </div>
            <div className="salary-stats">
                <div className="title" id="salary-title">126%</div>
                <div className="subtitle" id="salary-subtitle">170% Average Salary Hike</div>
            </div>
        </div>
        
    </div>
  )
}

export default StatsInfo