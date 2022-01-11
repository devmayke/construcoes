import React from 'react'
import Header from '../../components/header'
import Main from '../../components/main'
import Footer from '../../components/footer'
// import {useEffect} from 'react'

const Home = () => {
  // useEffect(()=>{
  //   window.location.assign("/servicos#pintura")

  // },[])
  return (
    <div className="home">
     <Header/>
     <Main />
     <Footer />
    </div>
  )
}

export default Home
