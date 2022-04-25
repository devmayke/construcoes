import React from 'react'
import './servicos.css'
import Nav from '../../components/nav'
import "animate.css/animate.min.css"
import 'animate.css';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'



const Servicos = (props) => {
  const [wpmode, setWpmode] = useState('https://web.whatsapp.com/send?phone=5548999973102?&text=Olá%20Binho%20Construções')
  const {servico} = useParams()
  useEffect(() => {
   
  
    
          let sections = document.querySelectorAll("section")
          sections.forEach((el, index)=>{
            if(window.location.hash === "#" + el.id){
              el.scrollIntoView({
                behavior: "smooth",
                block:    "nearest",
                inline:   "nearest" 
              })           
            }    
          })
          let a = document.querySelectorAll(".servicos-nav a")
          a.forEach((el,index)=>{
            console.log(el.hash)
            if(window.location.hash ===  el.hash){
             
              el.click()        
            } 
        })
     
      // if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)) {
      //     setWpmode("https://wa.me/5548999973102?&text=Olá%20Binho%20Construções")
         
      //       a.forEach((el,index)=>{
      //         if(window.document.hash() === "#" + el.id){
      //           console.log('caiu aqui' + a)
      //           el.click()        
      //         } 
      //     })
      // }
  }, [])

  return (
    <div className='page-servicos-container'>
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
      <a style={{ zIndex: '6' }} className='whatsapp animate__animated animate__pulse animate__infinite' href={wpmode} target='_blank'></a>

    </div>

  )
}

export default Servicos

