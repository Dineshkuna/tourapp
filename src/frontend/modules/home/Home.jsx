import React from 'react'
import HeroSlide from './hero/HeroSlide'
import TravelCheck from './travelCheck/TravelCheck'
import BestService from './bestService/BestService'
import Features from './features/Features'
import Experience from './experience/Experience'

const Home = () => {
  return (
    <div>
      <HeroSlide/>
      <TravelCheck/>
      <BestService/>
      <Features/>
      <Experience/>
    </div>
  )
}

export default Home
