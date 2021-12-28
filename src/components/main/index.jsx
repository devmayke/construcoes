import React from 'react'
import './main.css'

import Section1 from '../section1'
import Section2 from '../section2'
import Contato from '../contato'


const Main = () => {
  return (

    <main className='main'>
      <Section1/> 
      <Section2/>
      <Contato/>          
    </main>
  )
}

export default Main
