import React, { useEffect, useState } from 'react'
import './main.css'

import Section1 from '../section1'
import Section2 from '../section2'
import Section3 from '../section3'


const Main = () => {
  const [resize, setResize ] = useState('fit-content')
  useEffect(()=>{
    window.addEventListener('keyboardDidShow', function (e) {
      setResize('600vh')
      console.log(e)
  });
  },[window.onresize])
  return (
  

    <main style={{height:resize}}  className='main'>
      <Section1/> 
      <Section2/>
      <Section3/>          
    </main>
  )
}

export default Main
