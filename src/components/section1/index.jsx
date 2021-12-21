import './section1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintRoller, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../styled/icons/Icon'
import { useState } from 'react'

export default function Section1() {
    const [s, setS] = useState(false)
    const [item, setItem] = useState(new Array(4).fill(false))
    function selectItem(index){
        
       item.forEach((el,i)=>{
           if(i == index - 1){
                item[i] = true
           }else{
                item[i] = false
           }
       })
       return item
    }
 
    return (

        <section className='apresentacao apresentacao-img'>
         
            <article onMouseOver={()=>{setItem(selectItem(1));console.log(item)}} onMouseOut={()=>{item[0] = false ;console.log(item)} } >
                <Icon item={item[0]} ><FontAwesomeIcon icon={faPaintRoller} size='2x' /></Icon>
                <p>Construção e Reforma predial e residencial do início ao fim: alvenaria, elétrica, hidráulica, texturização e pintura</p>
            </article>
            
            <article onMouseOver={()=>{setItem(selectItem(2));console.log(item)}} onMouseOut={()=>{item[1] = false ;console.log(item)} }  >
                <Icon item={item[1]} ><FontAwesomeIcon icon={faScrewdriverWrench} size='2x' /></Icon>
                <p>Nosso time profissional é composto por eletricistas, eletrotécnicos, ceramistas, pedreiros e pintores</p>
            </article>

            <article onMouseOver={()=>{setItem(selectItem(3));console.log(item)}} onMouseOut={()=>{item[2] = false ;console.log(item)} } >
                <Icon item={item[2]} ><FontAwesomeIcon icon={faPaintRoller} size='2x' /></Icon>
                <p>Construção e Reforma predial e residencial do início ao fim: alvenaria, elétrica, hidráulica, texturização e pintura</p>
            </article>

            <article onMouseOver={()=>{setItem(selectItem(4));console.log(item)}} onMouseOut={()=>{item[3] = false ;console.log(item)} } >
                <Icon item={item[3]}><FontAwesomeIcon icon={faScrewdriverWrench} size='2x' /></Icon>
                <p>Nosso time profissional é composto por eletricistas, eletrotécnicos, ceramistas, pedreiros e pintores</p>
            </article>

        </section>

    )
}