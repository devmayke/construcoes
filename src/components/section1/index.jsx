import './section1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintRoller, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../styled/icons/Icon'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"
import 'animate.css';

export default function Section1() {

   
 
    return (

        <section className='apresentacao apresentacao-img'>
            <ScrollAnimation className='article' animateIn='animate__animated animate__slideInLeft'>
            <article >
                <Icon ><FontAwesomeIcon icon={faPaintRoller} size='2x' /></Icon>
                <p>Construção e Reforma predial e residencial do início ao fim: alvenaria, elétrica, hidráulica, texturização e pintura</p>
            </article>

            </ScrollAnimation>
            <ScrollAnimation className='article'  animateIn='animate__animated animate__slideInRight'>
            <article  >
                <Icon ><FontAwesomeIcon icon={faScrewdriverWrench} size='2x' /></Icon>
                <p>Nosso time profissional é composto por eletricistas, eletrotécnicos, ceramistas, pedreiros e pintores</p>
            </article>
            </ScrollAnimation>


           
            

          
          
            

        
         
            
            
            
        </section>

    )
}