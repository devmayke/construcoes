import React from 'react'
import Header from '../../components/header'
import Main from '../../components/main'
import Footer from '../../components/footer'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './home.css'


const Home = (props) => {
 
  const params = useParams()
  const [email, setEmail] = useState(false)

    
  useEffect(()=>{
    try{
      JSON.parse(localStorage.getItem('email'))
    }catch(err){
      console.log('essa porra ainda não existe', err)
      localStorage.setItem('email', 'false')
    }
 
    if(params.email === "send" && JSON.parse(localStorage.getItem('email')) === true){
     setEmail(true)
    }

    },[])
   


   


  function renderModal() {
        return (
            <div onClick={()=>{setEmail(false);localStorage.setItem('email', 'false')}} className='wrapper-modal'>
                <div className='modal-email'>
                    <h2>Email enviado com sucesso!</h2>
                    <button onClick={()=>{setEmail(false);localStorage.setItem('email', 'false')}}>X</button>
                </div>
            </div>
        )
    }

  return (
    <div className="home">
     {email && renderModal()}
     <Header/>
     <Main />
     <Footer />
    </div>
  )
}

export default Home
