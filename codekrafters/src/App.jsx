import React from 'react'
import Navbar from "./components/Navbar"
import Landing from './components/Landing'
import StatsInfo from './components/StatsInfo'
const App = () => {
  return (
    <div className="home">
      <Navbar/>
      <Landing/>
      <StatsInfo/>
    </div>
  )
}

export default App