import './header.css'
import './slider.css'
import Carousel from '../carousel'
import Nav from '../nav'
import image1 from './assets/GettyImages-628578920-1.jpg'
import image2 from './assets/imprevisto-em-obras-2.jpg'
import image3 from './assets/obras.jpg'
import image4 from './assets/04_Planejamento_controle_obras-min.png'
import { useEffect, useState, useRef } from 'react'
// import Aos from 'aos'
// import 'aos/dist/aos.css'


const Header = (props) => {
  // const btnNext = useRef()
  // const [currentSlide, setCurrentSlide] = useState(0)
//   useEffect(()=>{
//     autoSlider()

// },[])



  const images = [image1, image2, image3, image4]

  const textSlide = {
    title: [
      'Construção e Obras',
      'Manutenção predial e residencial',
      'Pinturas e reformas',
      'Limpeza e Conservação'
    ],
    description: [
      'Serviço de empreita de obras, construções residenciais e prediais',
      'Serviços de alvernaria,elétrica, hidráulica',
      'Pintura e texturização',
      'Lavação predial, paredes, telhados, rufos, calhas e fachadas de vidro'
    ]
  }
  // function previous(){
  //   console.log(currentSlide)
  //   setCurrentSlide(currentSlide - 1)
  //   if(currentSlide <= 1){
  //     setCurrentSlide(4)
  //     }
   
  // }
  // function next(){ 
  //   console.log(currentSlide)
  //   setCurrentSlide(currentSlide + 1) 

  //   if(currentSlide > 3){
  //     setCurrentSlide(1)
  //   }
  // }
  // function autoSlider(){
  //   setInterval(()=>{btnNext.current.click()}, 3000)
  // }
 

  


  return (
    <header className='header'>
    
     
      <Nav/>    
      {/* <div className='slider'>
        <div style={{width:`calc(${images.length.toString()} * 100vw)`}} className="container-img">
          {images.map((el, index)=>{
          
            return (<img style={{transform: `translateX(-${currentSlide - 1}00vw)` }} src={el} key={index}/>)
          })}
          <button onClick={()=>{previous()}} className='previous'>&lt;</button>
          <button ref={btnNext} onClick={()=>{next()}} className='next'>&gt;</button>
        </div>
       
                        
      </div>  */}
     
    
      <Carousel className='carousel' footer={true} images={images} textSlide={textSlide} />

    </header>
  )
}

export default Header
