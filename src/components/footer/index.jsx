import './footer.css'
import logo from './Captura-de-tela-2021-12-23-152415.svg'
import { Link } from 'react-router-dom'
import "animate.css/animate.min.css"
import 'animate.css';
import { useEffect, useState } from 'react';
import facebook from './facebook.png'
import tiktok from './tik-tok.png'
import instagram  from './instagram.png'
import whatsapp from './whatsapp.png'

export default function Footer() {
    const [wpmode, setWpmode] = useState('https://web.whatsapp.com/send?phone=5548999973102?&text=Olá%20Binho%20Construções')
    useEffect(()=>{
        console.log(navigator.userAgent.match(/iPad/i))
        if(navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i) ){
            setWpmode("https://wa.me/5548999973102?&text=Olá%20Binho%20Construções")
           }       
    },[])
    return (
        <footer className='footer'>
            <section className='logo-footer'>

                <span >
                    <img src={logo} alt="" />

                </span><h1>Binho Construções</h1>

            </section>
            <section className='contato-footer'>
                <details style={{ color:'white'}}>
                    <summary style={{padding:"20px 0", cursor:'pointer'}}>Páginas</summary>
                    <ul className='menu-footer-'>
                        <li><Link to='construcoes'>Construções</Link></li>
                        <li><Link to='sobre'>Sobre</Link></li>
                        <li><Link to='contato'>Contato</Link></li>
                        <li><Link to='cliente'>Portal do Cliente</Link></li>
                    </ul>
                </details>
                <span>
                <p style={{marginTop:'30px', textAlign:'center'}}>Redes Sociais</p>
                <ul className='menu-redes'> 
              <li><img src={facebook} alt="" /></li>
              <li><img src={tiktok} alt="" /></li>
              <li><img src={instagram} alt="" /></li>
              <li><img src={whatsapp} alt="" /></li>
            </ul>

                </span>
               
                
            </section>
            <section className='menu-footer'>
                <article>
                    <h1 style={{marginBottom:'30px'}}>Sobre</h1>
                    <p style={{marginBottom:'45px'}}>A Binho Construções atua na grande Florianópolis desde 2007 executando projetos e serviços que vão desde o alicerce ao acabamento. 
                        Nossos profissionais estão preparados para executar serviços técnicos e sofisticados de instalações e execução de obras de todos os padrões. 
                        Nosso compromisso como empresa se baseia na entrega rápida e no baixo custo, priorizando as normas técnicas, a conduta profissional e principalemente, a satisfação do cliente.  </p>
                
                <span>
                <p>Telefone: (48) 9997-3102</p>
                <p>E-mail: binhoconstrucoes2007@gmail.com</p>
                <p>Endereço: Rua Valdemiro Eli 800, Potecas-São José-SC</p>
                </span>

                </article>
                
            </section>
            <a style={{zIndex:'6'}} className='animate__animated animate__pulse animate__infinite' href={wpmode} target='_blank'></a>



        </footer>
    )
}
