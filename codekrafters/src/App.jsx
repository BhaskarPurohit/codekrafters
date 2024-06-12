import React from 'react'
import Navbar from "./components/Navbar"
import Landing from './components/Landing'
import StatsInfo from './components/StatsInfo'
import "./App.css"
import RelatedCourses from './components/RelatedCourses'
const App = () => {
  return (
    <div className="home">
      <Navbar/>
      <Landing/>
      <StatsInfo/>
      <RelatedCourses/>
    </div>
  )
}

export default App