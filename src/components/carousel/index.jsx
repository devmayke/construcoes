import React, {useState} from 'react'
import './carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'nuka-carousel';


const CarouselComponent = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <Carousel className='carousel'
    wrapAround={true}
    autoplayInterval={3500}
    autoplay={true}  
    dragging={true}
    pauseOnHover={true}
    defaultControlsConfig={{
      pagingDotsContainerClassName:"container-dots"
    }}
   
    renderCenterLeftControls={({ previousSlide }) => (
      <FontAwesomeIcon  className='previous' onClick={previousSlide} icon={ faChevronLeft }size='5x' />
    )}
    renderCenterRightControls={({ nextSlide }) => (
      <FontAwesomeIcon   className="next" onClick={nextSlide} icon={ faChevronRight } size='5x' />
    )}  
    renderTopCenterControls={({ currentSlide }) => (
      <div>{setCurrentSlide(currentSlide)}</div>
    )}
    >
       {
         props.images.map((el, i)=>{
          return(
             <img alt='' src={el} className={currentSlide === i ? 'animate':''} key={i}/>
           )
         })
       }
      </Carousel>
  )
}

export default CarouselComponent
