import React from 'react'
// import { Link } from "react-router-dom"
import Slider from "../../components/slider"
import Header from "../../components/header"
import Main from "../../components/main"
import Footer from "../../components/footer"
import "./home.css"
const Home = () => {
return (
   <div className="home">
      <Header />
      <Slider />
      <Main />
      <Footer/>
    </div >  
  )
}
export default Home
