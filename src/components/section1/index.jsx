import './section1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintRoller, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../styled/icons/Icon'


export default function Section1() {
   
 
    return (

        <section className='apresentacao apresentacao-img'>
         
            <article >
                <Icon ><FontAwesomeIcon icon={faPaintRoller} size='2x' /></Icon>
                <p>Construção e Reforma predial e residencial do início ao fim: alvenaria, elétrica, hidráulica, texturização e pintura</p>
            </article>
            
            <article  >
                <Icon ><FontAwesomeIcon icon={faScrewdriverWrench} size='2x' /></Icon>
                <p>Nosso time profissional é composto por eletricistas, eletrotécnicos, ceramistas, pedreiros e pintores</p>
            </article>

            <article >
                <Icon ><FontAwesomeIcon icon={faPaintRoller} size='2x' /></Icon>
                <p>Construção e Reforma predial e residencial do início ao fim: alvenaria, elétrica, hidráulica, texturização e pintura</p>
            </article>

            <article >
                <Icon ><FontAwesomeIcon icon={faScrewdriverWrench} size='2x' /></Icon>
                <p>Nosso time profissional é composto por eletricistas, eletrotécnicos, ceramistas, pedreiros e pintores</p>
            </article>

        </section>

    )
}