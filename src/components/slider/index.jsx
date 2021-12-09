import React from 'react'


import Carousel from 'nuka-carousel';

import img1 from '../../assets/images/2.png'
import img2 from '../../assets/images/3.png'
import img3 from '../../assets/images/4.png'
import img4 from '../../assets/images/6.png'
import "./slide.css"



const Slider = () => {
  const images = [img1, img2, img3, img4]
  const flickityOptions = {
    initialIndex: images.length
}

  return(
    <Carousel className="carousel"
    wrapAround={true}
    initialSlideHeight={'70vh'}
    autoplayInterval={2000}
    autoplay={true}
    renderCenterLeftControls={({ previousSlide }) => (
      <button onClick={previousSlide}>Previous</button>
    )}
    renderCenterRightControls={({ nextSlide }) => (
      <button onClick={nextSlide}>Next</button>
    )}
    
  

>
       {images.map((el, i)=>{
        return(
          <img src={el} alt="" />
        )
      })}

    </Carousel>
  ) 
  
}

export default Slider
 
