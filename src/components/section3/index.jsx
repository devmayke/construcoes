import './contato.css'
import Servicos from '../servicos'
import Formulario from '../formulario'
import "animate.css/animate.min.css"
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll'
import {useEffect, useState} from 'react'



export default function Section3 () {
    const [isMobile, setIsMobile] = useState(true)
    useEffect(()=>{
        if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }    
    },[])


    function renderServicos(){
        if(!isMobile){
            return(
                <ScrollAnimation  animateIn="animate__fadeInRight"  >
                    <Servicos className='servicos'/>
                </ScrollAnimation>
            )
        }
        return (
            <Servicos className='servicos' />
        )

    }

    function renderFormulario(){
        if(!isMobile){
            return(
                <ScrollAnimation className='contato' animateIn="animate__fadeInLeft"  >
                    <Formulario/>
                </ScrollAnimation> 
            )
        }
        return (
            <Formulario className='contato' />
        )
    }
 
    return (
        <section className='section3'>
           {renderServicos()}
            {renderFormulario()}
        </section>
    )
}