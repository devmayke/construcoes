import './section1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintRoller, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../styled/icons/Icon'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


export default function Section1() {
    useEffect(()=>{
        Aos.init({duration:500})
        Aos.refresh();
    },[])
   
 
    return (

        <section className='apresentacao apresentacao-img'>
         
            <article  data-aos='fade-right'  >
                <Icon ><FontAwesomeIcon icon={faPaintRoller} size='2x' /></Icon>
                <p>Construção e Reforma predial e residencial do início ao fim: alvenaria, elétrica, hidráulica, texturização e pintura</p>
            </article>
            
            <article data-aos='fade-left'  >
                <Icon ><FontAwesomeIcon icon={faScrewdriverWrench} size='2x' /></Icon>
                <p>Nosso time profissional é composto por eletricistas, eletrotécnicos, ceramistas, pedreiros e pintores</p>
            </article>
        </section>

    )
}