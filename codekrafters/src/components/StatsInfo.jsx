import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'
import "../styles/Statsinfo.css"
import { BsBagCheck } from 'react-icons/bs'
import { SiGoogleclassroom } from 'react-icons/si'
const StatsInfo = () => {
    return (
        <div className="stats-new">
            <div className='stats-info-main'>
                <div className="stats-info" id='salary-info'>
                    <div className="icon" id="increase-icon">
                        <FaArrowTrendUp style={
                            {height:"30px", width:"30px"}
                        }/>
                    </div>
                    <div className="salary-stats">
                        <div className="title" id="salary-title">126%</div>
                        <div className="subtitle" id="salary-subtitle">170% Average Salary Hike</div>
                    </div>
                </div>
                <div className="stats-info" id='salary-info'>
                    <div className="icon" id="increase-icon">
                    <BsBagCheck style={
                            {height:"30px", width:"30px"}
                        }/>
                    </div>
                    <div className="salary-stats">
                        <div className="title" id="placements-title">100+</div>
                        <div className="subtitle" id="placements-subtitle">Job Placements</div>
                    </div>
                </div>
                <div className="stats-info" id='salary-info'>
                    <div className="icon" id="increase-icon">
                    <SiGoogleclassroom style={
                            {height:"30px", width:"30px"}
                        }/>
                    </div>
                    <div className="salary-stats">
                        <div className="title" id="live-title">Live</div>
                        <div className="subtitle" id="live-subtitle">Interactive Sessions</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StatsInfo