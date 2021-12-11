import React from 'react'
import './carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'nuka-carousel';


const CarouselComponent = (props) => {
  return (
    <Carousel className='carousel'
    wrapAround={true}
    autoplayInterval={2000}
    autoplay={true}  
    renderCenterLeftControls={({ previousSlide }) => (
      <FontAwesomeIcon  className='previous' onClick={previousSlide} icon={ faChevronLeft }size='5x' />
    )}
    renderCenterRightControls={({ nextSlide }) => (
      <FontAwesomeIcon   className="next" onClick={nextSlide} icon={ faChevronRight } size='5x' />
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
