
// import Aos from 'aos'
// import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Formulario () {
    // useEffect(()=>{
    //     Aos.init({duration:500})
    // },[])
    return (
        <div data-aos='fade-left' fade-aos-duration='1000' className="contato">
            <h1 >Deixe sua mensagem</h1>
            <form  action="https://formsubmit.co/binhoconstrucoes2007@gmail.com" method='POST'>
                <label htmlFor="nome">Nome</label>
                <input id='nome' name="name" type="text" placeholder='Digite seu nome' required />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Digite seu email" />
                <label htmlFor="phone">Celular</label>
                <input type="number" id="phone" name="phone" placeholder='Digite seu celular com DDD' required />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_autoresponse" value="Olá, recebi seu email, assim que possível entrarei em contato. Obrigado!" />
                <input type="hidden" name="_next" value='https://binhoconstrucoes.com.br/enviado' />
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="message" id="" cols="30" rows="10" placeholder='Digite sua mensagem' required></textarea>
                <div style={{ width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}><button type='submit'>Enviar</button></div>
            </form>
        </div>
    )
}
