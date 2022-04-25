import React from 'react'
import Nav from '../../components/nav'
import './sobre.css'
import "animate.css/animate.min.css"
import 'animate.css';
import {useState, useEffect} from 'react'


const Sobre = () => {
  const [wpmode, setWpmode] = useState('https://web.whatsapp.com/send?phone=5548999973102?&text=Olá%20Binho%20Construções')
  useEffect(() => {
      console.log(navigator.userAgent.match(/iPad/i))
      if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)) {
          setWpmode("https://wa.me/5548999973102?&text=Olá%20Binho%20Construções")
      }
  }, [])
  return (
    <>
      <Nav />
      <div className='servicos-sobre'>
        Página em construção
      </div>
      <a style={{ zIndex: '6' }} className='whatsapp animate__animated animate__pulse animate__infinite' href={wpmode} target='_blank'></a>
    </>
  )
}
export default Sobre
