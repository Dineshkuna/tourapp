import React from 'react';
import tour from '../../../../assets/images/tour.jpg';
import './Banner.css'

const Banner = () => {
  return (
    <div className='tourContainer'>
        <p className='tourHead'>All Tours</p>
        <img src={tour} alt="tourImg"  className='tourImg'/>      
    </div>
  )
}

export default Banner;
