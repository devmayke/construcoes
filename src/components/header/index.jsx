import React from 'react'
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header>
      <ul>
        <li><Link to="construcoes">Construções</Link></li>
        <li><Link to="servicos">Serviços</Link></li>
        <li><Link to="quemsomos">Quem Somos</Link></li>
        <li><Link to="contato">Contato</Link></li>
        <li><Link to="user">Área do Cliente</Link></li>
      </ul>
    </header>
  )
}

export default Header
