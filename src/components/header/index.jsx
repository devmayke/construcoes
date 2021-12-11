import React from 'react'
import './header.css'
import Carousel from '../carousel'

const Header= () => {
  return (
    <header className='header'>

      <nav>
        <div className='logo'>logo aqui</div>
        <ul className='menu'>
          <li>Construções</li>
          <li>Quem Somos</li>
          <li>Contato</li>
          <li>Área do Cliente</li>
        </ul>
      </nav>
      <Carousel/>

    </header>
  )
}

export default Header
