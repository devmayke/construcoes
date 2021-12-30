import './contato.css'
import alvenaria from './assets/alvenaria.png'
import carpintaria from './assets/serra-manual.png'
import eletrica from './assets/carga-eletrica.png'
import hidraulica from './assets/torneira.png'
import pintura from './assets/rolo-de-pintura.png'
import camera from './assets/camera-de-seguranca.png'

export default () => {
    return (
        <section className='section3'>
            <span>
            <h1>Serviços</h1>
            <article className='servicos'>
                 <div className='servicos-item'><div className='circle'><img src={alvenaria} alt="" /></div><h1 className='servicos-nome'>Alvenaria</h1></div>
                 <div className='servicos-item'><div className='circle'><img src={carpintaria} alt="" /></div><h1 className='servicos-nome'>Carpintaria</h1></div>
                 <div className='servicos-item'><div className='circle'><img src={eletrica } alt="" /></div><h1 className='servicos-nome'>Elétrica</h1></div>
                 <div className='servicos-item'><div className='circle'><img src={hidraulica} alt="" /></div><h1 className='servicos-nome'>Hidráulica</h1></div>
                 <div className='servicos-item'><div className='circle'><img src={pintura} alt="" /></div><h1 className='servicos-nome'>Pintura</h1></div>
                 <div className='servicos-item'><div className='circle'><img src={camera} alt="" /></div><h1 className='servicos-nome'>Instalações</h1></div>
            </article>
            </span>      
            <span>
            <h1 >Deixe sua mensagem</h1>
            <form  className="contato" action="https://formsubmit.co/devmayke@gmail.com" method='POST'>
                    <label htmlFor="nome">Nome</label>
                    <input id='nome' name="name"  type="text" placeholder='Digite seu nome' required/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Digite seu email"/>
                    <label htmlFor="phone">Celular</label>
                    <input type="number" id="phone" name="phone" placeholder='Digite seu celular com DDD' required/> 
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_autoresponse" value="Olá, recebi seu email, assim que possível entrarei em contato. Obrigado!"/>
                    <input type="hidden" name="_next" value='https://binho-construcoes.herokuapp.com/enviado'></input>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="message" id="" cols="30" rows="10" placeholder='Digite sua mensagem' required></textarea>
                <button  type='submit'>Enviar</button>
            </form>
            </span>
        </section>
    )
}