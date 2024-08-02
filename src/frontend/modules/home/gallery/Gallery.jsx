import React from 'react'
import './Gallery.css'
import galleryImg1 from '../../../../assets/images/gallery-01.jpg'
import galleryImg2 from '../../../../assets/images/gallery-02.jpg'
import galleryImg3 from '../../../../assets/images/gallery-03.jpg'
import galleryImg4 from '../../../../assets/images/gallery-04.jpg'
import galleryImg5 from '../../../../assets/images/gallery-05.jpg'
import galleryImg6 from '../../../../assets/images/gallery-06.jpg'
import galleryImg7 from '../../../../assets/images/gallery-07.jpg'
import galleryImg8 from '../../../../assets/images/gallery-08.jpg'

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className='gallery-head'>Gallery</h2>
      <p className='gallery-caption'>Visit our customers tour gallery</p>
      
      <div className="gallery-grid"> 
        <div className="gallery-item item1"><img src={galleryImg1} alt="Gallery 1" /></div>
        <div className="gallery-item item2"><img src={galleryImg2} alt="Gallery 2" /></div>
        <div className="gallery-item item3"><img src={galleryImg3} alt="Gallery 3" /></div>
        <div className="gallery-item item4"><img src={galleryImg4} alt="Gallery 4" /></div>
        <div className="gallery-item item5"><img src={galleryImg5} alt="Gallery 5" /></div>
        <div className="gallery-item item6"><img src={galleryImg6} alt="Gallery 6" /></div>
        <div className="gallery-item item7"><img src={galleryImg7} alt="Gallery 7" /></div>
        <div className="gallery-item item8"><img src={galleryImg8} alt="Gallery 8" /></div>
      </div>
    </div>
  )
}

export default Gallery