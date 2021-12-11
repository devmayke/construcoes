import React from 'react'
import Carousel from 'nuka-carousel';


const CarouselComponent = () => {
  return (
    <Carousel 
    wrapAround={true}
    autoplayInterval={2000}
    autoplay={true}    
    >
       <div>slide</div>
       <div>slide</div>
       <div>slide</div>
       <div>slide</div>
      </Carousel>
  )
}

export default CarouselComponent
