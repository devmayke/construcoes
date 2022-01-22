import React from 'react'
import Nav from '../../components/nav'
import Formulario from '../../components/formulario'
import './contato.css'
// import "animate.css/animate.min.css"
// import 'animate.css'
import { useState, useEffect } from 'react'
import facebook from './facebook.png'
import tiktok from './tik-tok.png'
import instagram from './instagram.png'
import whatsapp from './whatsapp.png'
import telefone from './telephone-call.png'
import localizacao from './locator.png'
import gmail from './gmail.png'

const Contato = () => {
  const [wpmode, setWpmode] = useState('https://web.whatsapp.com/send?phone=5548999973102?&text=Olá%20Binho%20Construções')
  useEffect(() => {
    console.log(navigator.userAgent.match(/iPad/i))
    if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)) {
      setWpmode("https://wa.me/5548999973102?&text=Olá%20Binho%20Construções")
    }
  }, [])
  function linkTo(link) {
    switch (link) {
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
      <Nav />
      <div className='servicos-contato'>

        <div className='form-contato'>
          <Formulario />
        </div>
        <h1>Localização</h1>
        <div className='localizacao'>
          <div className='wrapper'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.2184094363797!2d-48.648101085364914!3d-27.586757482841918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274a189d4c1d7b%3A0x5b1bcfcde7e7769d!2sR.%20Valdemiro%20Eli%2C%20800%20-%20Potecas%2C%20S%C3%A3o%20Jos%C3%A9%20-%20SC%2C%2088119-058!5e0!3m2!1spt-BR!2sbr!4v1642884432020!5m2!1spt-BR!2sbr" width="670" height="450" style={{ border: "0", margin: "auto" }} allowfullscreen="" loading="lazy"></iframe>
          </div>
            <ul className='menu-redes'>
              <li><img onClick={e => { linkTo('facebook') }} src={facebook} alt="" /></li>
              <li><img onClick={e => { linkTo('tiktok') }} src={tiktok} alt="" /></li>
              <li><img onClick={e => { linkTo('instagram') }} src={instagram} alt="" /></li>
              <li><img onClick={e => { linkTo('whatsapp') }} src={whatsapp} alt="" /></li>
            </ul>

        </div>

      </div>
      {/* <a style={{ zIndex: '6' }} className='whatsapp animate__animated animate__pulse animate__infinite' href={wpmode} target='_blank'></a> */}
    </>
  )
}

export default Contato

