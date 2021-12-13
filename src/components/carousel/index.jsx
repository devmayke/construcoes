import React, { useState } from 'react'
import './carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'nuka-carousel';


const CarouselComponent = (props) => {
  const [currentSlideState, setCurrentSlideState] = useState(0)

  return (
    <>
      <Carousel className='carousel'
        wrapAround={true}
        autoplayInterval={3500}
        autoplay={true}
        dragging={true}
        pauseOnHover={true}
        defaultControlsConfig={{
          pagingDotsContainerClassName: "container-dots"
        }}

        renderCenterLeftControls={({ previousSlide }) => (
          <FontAwesomeIcon className='previous' onClick={previousSlide} icon={faChevronLeft} size='5x' />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <FontAwesomeIcon className="next" onClick={nextSlide} icon={faChevronRight} size='5x' />
        )}
        renderTopCenterControls={({ currentSlide }) => {
          setCurrentSlideState(currentSlide)
          return(
          <div></div>
        )}}
      >
        {
          props.images.map((el, i) => {
            return (
              <img alt='' src={el} className={currentSlideState === i ? 'animate' : ''} key={i} />
            )
          })
        }
      </Carousel>
      <div className={`text-slide text-animate` } key={currentSlideState}>
        <h1>{props.textSlide.title[currentSlideState]}</h1>
        <p>{props.textSlide.description[currentSlideState]}</p>
      </div>      
    </>
  )
}

export default CarouselComponent
