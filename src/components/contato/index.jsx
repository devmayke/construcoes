import './contato.css'
export default () => {
    return (
        <section className='section3'>
            <span style={{width:"100%", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:"center"}}>
            <h1 style={{margin:'0 0 10px 0'}}>Deixe sua mensagem</h1>
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