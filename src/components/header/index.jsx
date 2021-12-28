
import './header.css'
import Carousel from '../carousel'
import { Link } from 'react-router-dom'
import logo from './Captura-de-tela-2021-12-23-152415.svg'
import { useState, useRef } from 'react'
import facebook from './facebook.png'
import tiktok from './tik-tok.png'
import instagram  from './instagram.png'
import whatsapp from './whatsapp.png'
const Header = (props) => {
  const [menuMobile, setMenuMobile] = useState({ width:'0%', opacity:'0'})
  
  const menuChecked = useRef()
  function checkMenu() {

    if (menuChecked.current.checked) {
      setMenuMobile({ width:'101%', opacity:'1'})
    } else {
      setMenuMobile({width:'0%', opacity:'0'})
    }
  }


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
      <nav>
        <div className='logo'><img src={logo} alt="logo Binho construções" /><p>Binho Construções</p></div>
        <ul className='menu'>
          <li><Link to='construcoes'>Construções</Link></li>
          <li><Link to='sobre'>Sobre</Link></li>
          <li><Link to='contato'>Contato</Link></li>
          <li><Link to='cliente'>Portal do Cliente</Link></li>
        </ul>
        <label htmlFor='check'>
          <div className='hamburger'>
            <input ref={menuChecked} onChange={() => { checkMenu() }} id='check' type="checkbox" />
            <div className='t1'></div>
            <div className='t2'></div>
            <div className='t3'></div>
          </div>
        </label>
      </nav>
      <div style={{ width:menuMobile.width, opacity:menuMobile.opacity}} className='menu-mobile'>
      <nav>
        
        <ul className='menu-vertical'>
          <li style={{ marginBottom:'20px'}} ><span className='logo-mobile' style={{margin:'auto',display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}><img src={logo} alt="logo Binho construções" /></span><p style={{padding:'10px',fontSize:'20px'}}>Binho Construções</p></li>
          <li><Link to='construcoes'>Construções</Link></li>
          <li><Link to='sobre'>Sobre</Link></li>
          <li><Link to='contato'>Contato</Link></li>
          <li><Link to='cliente'>Portal do Cliente</Link></li>
          <li className='redes-mobile'>
            <ul>
              <li><img src={facebook} alt="" /></li>
              <li><img src={tiktok} alt="" /></li>
              <li><img src={instagram} alt="" /></li>
              <li><img src={whatsapp} alt="" /></li>
            </ul>
          </li>
        </ul>
      </nav>
        
      </div>
      <Carousel className='carousel' footer={true} images={images} textSlide={textSlide} />

    </header>
  )
}

export default Header
