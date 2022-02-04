import alvenaria from './assets/alvenaria.png'
import carpintaria from './assets/serra-manual.png'
import eletrica from './assets/carga-eletrica.png'
import hidraulica from './assets/torneira.png'
import pintura from './assets/rolo-de-pintura.png'
import camera from './assets/camera-de-seguranca.png' 

import { useEffect } from 'react'



export default function Servicos(){
   
    
    
    function linkToServico(link) {
        window.location.assign(`/servicos#${link}`)
        console.log()
    }
    
    return(
         <div >
                <h1>Serviços</h1>
                <div className='servicos-container' >
                    <div data-aos= 'flip-up' data-aos-delay='350' className='servicos-item'><div onClick={() => { linkToServico('alvenaria') }} className='circle'><img src={alvenaria} alt="" /></div><h1 className='servicos-nome'>Alvenaria</h1></div>
                    <div data-aos= 'flip-up' data-aos-delay='350' className='servicos-item'><div onClick={() => { linkToServico('carpintaria') }} className='circle'><img src={carpintaria} alt="" /></div><h1 className='servicos-nome'>Carpintaria</h1></div>
                    <div data-aos= 'flip-up' data-aos-delay='350' className='servicos-item'><div onClick={() => { linkToServico('eletrica') }} className='circle'><img src={eletrica} alt="" /></div><h1 className='servicos-nome'>Elétrica</h1></div>
                    <div data-aos= 'flip-up' data-aos-delay='200' className='servicos-item'><div onClick={() => { linkToServico('hidraulica') }} className='circle'><img src={hidraulica} alt="" /></div><h1 className='servicos-nome'>Hidráulica</h1></div>
                    <div data-aos= 'flip-up' data-aos-delay='200' className='servicos-item'><div onClick={() => { linkToServico('pintura') }} className='circle'><img src={pintura} alt="" /></div><h1 className='servicos-nome'>Pintura</h1></div>
                    <div data-aos= 'flip-up' data-aos-delay='200' className='servicos-item'><div onClick={() => { linkToServico('instalacoes') }} className='circle'><img src={camera} alt="" /></div><h1 className='servicos-nome'>Instalações</h1></div>
                </div>
            </div>
    )

}