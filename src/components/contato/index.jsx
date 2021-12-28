import './contato.css'
export default () => {
    return (
        <section className='section3'>
            <form className="contato" action="">
                    <label htmlFor="nome">Nome</label>
                    <input id='nome' type="text" placeholder='Digite seu nome' required/>
                    <label htmlFor="phone">Celular</label>
                    <input type="number" id="phone" name="phone" placeholder='Digite seu celular com DDD' required/> 
                    <label htmlFor="assunto">Assunto</label>
                    <input type="text" id='assunto' placeholder='Digite o assunto da sua mensagem' />
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="" id="" cols="30" rows="10" placeholder='Digite sua mensagem' required></textarea>
            </form>
        </section>
    )
}