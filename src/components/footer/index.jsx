import './footer.css'
import logo from './Captura-de-tela-2021-12-23-152415.svg'
import { Link } from 'react-router-dom'
import "animate.css/animate.min.css"
import 'animate.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <section className='logo-footer'>

                <span >
                    <img src={logo} alt="" />

                </span><h1>Binho Construções</h1>

            </section>
            <section className='contato-footer'>
                <details style={{maxWidth:'50%', margin:'40px 0 0 0',padding:'0', color:'white'}}>
                    <summary style={{padding:"20px 0", cursor:'pointer'}}>Menu</summary>
                    <ul className='menu-footer-'>
                        <li><Link to='construcoes'>Construções</Link></li>
                        <li><Link to='sobre'>Sobre</Link></li>
                        <li><Link to='contato'>Contato</Link></li>
                        <li><Link to='cliente'>Portal do Cliente</Link></li>
                    </ul>    

                </details>
                
            </section>
            <section className='menu-footer'>
                Contato
            </section>
            <a style={{zIndex:'6'}} className='animate__animated animate__pulse animate__infinite' href="https://wa.me/5548999973102?&text=Olá%20Binho%20Construções" target='_blank'></a>



        </footer>
    )
}
