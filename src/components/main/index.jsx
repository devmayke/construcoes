import React, { useEffect, useState } from 'react'
import './main.css'

import Section1 from '../section1'
import Section2 from '../section2'
import Contato from '../contato'


const Main = () => {
  const [resize, setResize ] = useState('fit-content')
  useEffect(()=>{
    window.addEventListener('keyboardDidShow', function () {
      setResize('600vh')
  });
  },[window.onresize])
  return (
  

    <main style={{height:resize}}  className='main'>
      <Section1/> 
      <Section2/>
      <Contato/>          
    </main>
  )
}

export default Main
