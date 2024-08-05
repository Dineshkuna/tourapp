import React from 'react'
import TravelCheck from '../home/travelCheck/TravelCheck'
import Subscribe from '../subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
import Banner from './banner/Banner'

const Tour = () => {
  return (
    <div>
      <Banner/>
      <TravelCheck />
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Tour
