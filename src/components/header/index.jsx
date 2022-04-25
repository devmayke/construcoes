import './header.css'
import Carousel from '../carousel'
import Nav from '../nav'
import image1 from './assets/GettyImages-628578920-1.jpg'
import image2 from './assets/imprevisto-em-obras-2.jpg'
import image3 from './assets/obras.jpg'
import image4 from './assets/04_Planejamento_controle_obras-min.png'
import { useEffect } from 'react'



const Header = (props) => {



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
  return (
    <header className='header'>
    
     
      <Nav/>
        
    
      <Carousel className='carousel' footer={true} images={images} textSlide={textSlide} />

    </header>
  )
}

export default Header
