import './footer.css'
import logo from './Captura-de-tela-2021-12-23-152415.svg'
import { Link } from 'react-router-dom'
import "animate.css/animate.min.css"
import 'animate.css';
import { useEffect, useState } from 'react';
import facebook from './facebook.png'
import tiktok from './tik-tok.png'
import instagram from './instagram.png'
import whatsapp from './whatsapp.png'
import telefone from './telephone-call.png'
import localizacao from './locator.png'
import gmail from './gmail.png'

export default function Footer() {
    const [wpmode, setWpmode] = useState('https://web.whatsapp.com/send?phone=5548999973102?&text=Olá%20Binho%20Construções')
    useEffect(() => {
   
        if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)) {
            setWpmode("https://wa.me/5548999973102?&text=Olá%20Binho%20Construções")
        }
    }, [])
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
        <footer className='footer'>
            <section className='logo-footer'>
                <span >
                    <img src={logo} alt="" />
                </span><h1>Binho Construções</h1>
            </section>
            <section className='contato-footer'>
                {/* <details style={{ color: 'white' }}>
                    <summary style={{ padding: "20px 0", cursor: 'pointer' }}>Páginas</summary>
                    <ul className='menu-footer-'>
                        <li><Link to='construcoes'>Construções</Link></li>
                        <li><Link to='sobre'>Sobre</Link></li>
                        <li><Link to='contato'>Contato</Link></li>
                        <li><Link to='cliente'>Portal do Cliente</Link></li>
                    </ul>
                </details> */}
                <span>
                    <h1>Contato</h1>
                    <ul className='menu-redes'>
                        <li><img onClick={e=>{linkTo('facebook')}} src={facebook} alt="" /></li>
                        <li><img onClick={e=>{linkTo('tiktok')}} src={tiktok} alt="" /></li>
                        <li><img onClick={e=>{linkTo('instagram')}} src={instagram} alt="" /></li>
                        <li><img onClick={e=>{linkTo('whatsapp')}} src={whatsapp} alt="" /></li>
                    </ul>
                </span>
                <span className='contatos'>
                    <span><img src={telefone} alt="" /><p> (48) 9997-3102</p></span>
                    <span><img src={telefone} alt="" /><p> (48) 9102-9563</p></span>
                    <span><img src={gmail} alt="" /> <p> binhoconstrucoes2007@gmail.com</p></span>
                    <span><img src={localizacao} alt="" /> <p> Rua Valdemiro Eli 800, Potecas-São José-SC</p></span>
                </span>

            </section>
            <section className='menu-footer'>
                <article>
                    <h1 style={{ marginBottom: '30px' }}>Sobre</h1>
                    <p style={{ marginBottom: '45px' }}>Binho Construções atua na grande Florianópolis desde 2007 executando projetos e serviços que vão desde o alicerce ao acabamento.
                        Nossos profissionais estão preparados para executar serviços técnicos e sofisticados de instalações e execução de obras de todos os padrões.
                        Nosso compromisso como empresa se baseia na entrega rápida, no baixo custo, sempre priorizando as normas técnicas, a conduta profissional e principalmente, a satisfação do cliente.  </p>
                </article>

            </section>
            <a style={{ zIndex: '6' }} className='animate__animated animate__pulse animate__infinite' href={wpmode} target='_blank'></a>



        </footer>
    )
}
