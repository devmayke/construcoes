import React from 'react'
import './carousel.css'
import Carousel from 'nuka-carousel';



const CarouselComponent = (props) => {
  return (
    <Carousel className='carousel'
    wrapAround={true}
    autoplayInterval={2000}
    autoplay={true}  
    renderCenterLeftControls={({ previousSlide }) => (
      <button className='previous' onClick={previousSlide}>Previous</button>
    )}
    renderCenterRightControls={({ nextSlide }) => (
      <button className="next" onClick={nextSlide}>Next</button>
    )}  
    >
       {
         props.images.map((el, i)=>{
           return(
             <img src={el} key={i}/>
           )

         })
       }
      </Carousel>
  )
}

export default CarouselComponent
