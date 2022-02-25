
import './carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'nuka-carousel'
import "animate.css/animate.min.css"
import 'animate.css';
import { useEffect, useState,  useRef  } from 'react'


const CarouselComponent = (props) => {
  const btnNext = useRef()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentScreenWidth, setCurrentScreenWidth] = useState(700)
  useEffect(()=>{
    autoSlider()
    
    setCurrentScreenWidth(window.screen.width)
  },[])
  function sizeWidth(){
    if(currentScreenWidth > 600){
      return true
    }
    return false
    

 
  }
  function goToPage(){
    window.location.assign("/contato")
  }
  function previous(){
    console.log(currentSlide)
    setCurrentSlide(currentSlide - 1)
    if(currentSlide <= 1){
      setCurrentSlide(4)
      }
   
  }
  function next(){ 
    console.log(currentSlide)
    setCurrentSlide(currentSlide + 1) 

    if(currentSlide > 3){
      setCurrentSlide(1)
    }
  }
  function autoSlider(){
    setInterval(()=>{btnNext.current.click()}, 3500)
  }
  
 

  return (
    <>
    <div className='slider'>
        <div style={{width:`calc(${props.images.length.toString()} * 100vw)`}} className="container-img">
          {props.images.map((el, index)=>{
          
            return (<img style={{transform: `translateX(-${currentSlide - 1}00vw)` }} src={el} key={index}/>)
          })}
          <button onClick={()=>{previous()}} className='previous'>&lt;</button>
          <button ref={btnNext} onClick={()=>{next()}} className='next'>&gt;</button>
        </div>
       
                        
      </div> 
     
      
  
 
      <div className={`text-slide text-animate` } key={currentSlide}>
        <h1>{props.textSlide.title[currentSlide]}</h1>
        <p>{props.textSlide.description[currentSlide]}</p>
        <button onClick={()=>{goToPage()}} className='agendar animate__animated animate__headShake animate__delay-1s'>Agende uma visita</button>
      </div>      
    </>
  )
}

export default CarouselComponent
