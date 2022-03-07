

import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Home from '../../pages/home'
import context from '../../state/context'

export default function Formulario() {
    const email = useContext(context)
    email.setIsEnviado(true)




    return (
        <div className="contato" style={{ width: "100%" }} >
            <h1 >Deixe sua mensagem</h1>
            {/* <form  action="https://formsubmit.co/binhoconstrucoes2007@gmail.com" method='POST'> */}
            <form action="https://formsubmit.co/devmayke@gmail.com" method='POST'>
                <label htmlFor="nome">Nome</label>
                <input id='nome' name="name" type="text" placeholder='Digite seu nome' required />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Digite seu email" />
                <label htmlFor="phone">Celular</label>
                <input type="number" id="phone" name="phone" placeholder='Digite seu celular com DDD' required />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_autoresponse" value="Olá, recebi seu email, assim que possível entrarei em contato. Obrigado!" />
                <input type="hidden" name="_next" value='https://www.binhoconstrucoes.com.br/send' />
                <label htmlFor="mensagem">Mensagem</label>              
                <textarea id="mensagem" name="message" id="" cols="30" rows="10" placeholder='Digite sua mensagem' required></textarea>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><button onClick={()=>{
                    localStorage.setItem('email', 'true')
                } } type='submit'>Enviar</button></div>
            </form>
        </div>
    )
}
