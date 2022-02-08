import './contato.css'
import Servicos from '../servicos'
import Formulario from '../formulario'
import "animate.css/animate.min.css"
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll'



export default function Section3 () {
  
 
    return (
        <section className='section3'>
            <ScrollAnimation className='servicos' animateIn="animate__fadeInRight"  >
            <Servicos/>
            </ScrollAnimation>
            <ScrollAnimation className='contato' animateIn="animate__fadeInLeft"  >
            <Formulario/>
            </ScrollAnimation>
            
        </section>
    )
}