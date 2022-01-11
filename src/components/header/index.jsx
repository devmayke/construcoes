import './header.css'
import Carousel from '../carousel'
import Nav from '../nav'
const Header = (props) => {


  const images = [
    "https://artia.com/wp-content/uploads/2015/07/obras.jpg",
    "https://constructapp.io/shared/uploads/2017/05/imprevisto-em-obras-2.jpg",
    "https://ibecensino.org.br/wp-content/uploads/2019/07/04_Planejamento_controle_obras.png",
    "https://blog.belgobekaert.com.br/wp-content/uploads/2019/09/GettyImages-628578920-1.jpg"
  ]

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
