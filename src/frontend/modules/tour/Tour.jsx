import React from 'react'
import TravelCheck from '../home/travelCheck/TravelCheck'
import Subscribe from '../subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
import Banner from './banner/Banner'
import Hotels from './hotels/Hotels'

const Tour = () => {
  return (
    <div>
      <Banner/>
      {/* <TravelCheck /> */}
      <Hotels/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Tour
