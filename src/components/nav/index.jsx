import './nav.css'
import { Link } from 'react-router-dom'
import logo from './Captura-de-tela-2021-12-23-152415.svg'
import facebook from './facebook.png'
import tiktok from './tik-tok.png'
import instagram from './instagram.png'
import whatsapp from './whatsapp.png'
import { useState, useRef, useEffect } from 'react'
export default function Nav() {
  const [menuMobile, setMenuMobile] = useState({ width: '0%', opacity: '0', background: 'rgba(0,0,0, .7)', border: '1px solid white', displayRedes:'none', pointerEvents:'none' })
  const [isChecked, setIsChecked] = useState(false)
  const menuChecked = useRef()

  const [wpmode, setWpmode] = useState('https://web.whatsapp.com/send?phone=5548999973102?&text=Olá%20Binho%20Construções')
  useEffect(() => {
 
      if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)) {
          setWpmode("https://wa.me/5548999973102?&text=Olá%20Binho%20Construções")
      }
  }, [])

  function checkMenu() {
    if (menuChecked.current.checked) {
      setMenuMobile({ width: '101%', opacity: '1', opacity2: '0', background: 'rgba(0,0,0, 0)', border: 'none', display: 'flex',  displayRedes:'flex'  })
      setIsChecked(true)
    } else {
      setMenuMobile({ width: '0%', opacity: '0', opacity2: '1', background: 'rgba(0,0,0, .7)', border: '1px solid white', displayRedes:'none', pointerEvents:'none'})
      setIsChecked(false)
    }
  }

  function closeMenu(e) {
    if (window.location.pathname !== '/') {
      if (window.location.pathname === '/' + e.target.href.split('/')[e.target.href.split('/').length - 1]) {
        setIsChecked(false)
        setMenuMobile({ width: '0%', opacity: '0', opacity2: '1', background: 'rgba(0,0,0, .7)', border: '1px solid white', displayRedes:'none',pointerEvents:'none' })
      } else if (window.location.pathname === '/') {
        setIsChecked(false)
        setMenuMobile({ width: '0%', opacity: '0', opacity2: '1', background: 'rgba(0,0,0, .7)', border: '1px solid white', displayRedes:'none',pointerEvents:'none'})
      }
    }
  }
  function goToHomePage(e) {
    if (window.location.pathname == '/') {
      setIsChecked(false)
      setMenuMobile({ width: '0%', opacity: '0', opacity2: '1', background: 'rgba(0,0,0, .7)', border: '1px solid white', displayRedes:'none', pointerEvents:'none' })
    }
  }
  function linkTo(link){
    switch(link){
        case 'tiktok':
            window.location.assign('https://www.tiktok.com/@binho_construcoes')
            break
        case 'instagram':
            window.location.assign('https://www.instagram.com/binhoconstrucoes2')
            break
        case 'facebook':
            window.location.assign('https://www.tiktok.com/@binho_construcoes')
            break
        case 'whatsapp':
            window.location.assign(wpmode)
            break
        default:
            window.location.assign(wpmode)
    }
}



  return (
    <>
      <nav style={{ background: menuMobile.background, borderBottom: menuMobile.border }} >
        <Link to="/" className='logo' style={{ opacity: menuMobile.opacity2 }}><img src={logo} alt="logo Binho construções" /><p>Binho Construções</p></Link>
        <ul style={{ opacity: menuChecked.opacity1 }} className='menu'>
          <li><Link to='/servicos'>Serviços</Link></li>
          <li><Link to='/sobre'>Sobre</Link></li>
          <li><Link to='/contato'>Contato</Link></li>
          <li><Link to='/cliente'>Portal do Cliente</Link></li>
        </ul>
        <label htmlFor='check'>
          <div className='hamburger'>
            <input ref={menuChecked} checked={isChecked} onChange={() => { checkMenu() }} id='check' type="checkbox" />
            <div className='t1'></div>
            <div className='t2'></div>
            <div className='t3'></div>
          </div>
        </label>
      </nav>
      <div style={{ width: menuMobile.width, opacity: menuMobile.opacity, display: menuMobile.display,pointerEvents:menuMobile.pointerEvents }} className='menu-mobile'>

        <nav style={{zIndex:menuMobile.pointerEvents}} >
          <ul onClick={(e) => { closeMenu(e) }} className='menu-vertical' >
            <li onClick={e => { goToHomePage(e) }} style={{ marginBottom: '20px' }} >
              <Link to="/"  >
                <div className='logo-mobile' style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={logo} alt="logo Binho construções" />
                </div>
                <p style={{ padding: '10px', fontSize: '20px' }}>Binho Construções</p>
              </Link>
            </li>
            <li><Link to='/servicos'>Serviços</Link></li>
            <li><Link to='/sobre'>Sobre</Link></li>
            <li><Link to='/contato'>Contato</Link></li>
            <li><Link to='/cliente'>Portal do Cliente</Link></li>
            <li  style={{display:menuMobile.displayRedes}} className='redes-mobile'>
              <ul>
                <li><img onClick={()=>{linkTo("facebook")}} src={facebook} alt="" /></li>
                <li><img onClick={()=>{linkTo("tiktok")}} src={tiktok} alt="" /></li>
                <li><img onClick={()=>{linkTo("instagram")}} src={instagram} alt="" /></li>
                <li><img onClick={()=>{linkTo("whatsapp")}} src={whatsapp} alt="" /></li>
              </ul>
            </li>
          </ul>
        </nav>

      </div>
    </>
  )
}