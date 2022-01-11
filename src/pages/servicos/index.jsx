import React from 'react'
import './servicos.css'
import Nav from '../../components/nav'



const Servicos = (props) => {

  return (
    <div className='servicos-container'>
      <Nav />
      <nav className='servicos-nav'>
        <ul>
          <li><a href="#alvenaria">Alvenaria</a></li>
          <li><a href="#carpintaria">Carpintaria</a></li>
          <li><a href="#eletrica">Elétrica</a></li>
          <li><a href="#hidraulica">Hidráulica</a></li>
          <li><a href="#pintura">Pintura</a></li>
          <li><a href="#instalacoes">Instalações</a></li>
        </ul>
      </nav>
      <section className='section-services' id='alvenaria'><h1>Alvenaria</h1></section>
      <section className='section-services' id='carpintaria'><h1>Carpintaria</h1></section>
      <section className='section-services' id='eletrica'><h1>Elétrica</h1></section>
      <section className='section-services' id='hidraulica'><h1>Hidráulica</h1></section>
      <section className='section-services' id='pintura'><h1>Pintura</h1></section>
      <section className='section-services' id='instalacoes'><h1>Instalações</h1></section>
    </div>

  )
}

export default Servicos

