import React from 'react'
import Home from '../Home/Home'
import Gift from '../Gift/Gift'
import AboutSection from '../About/About'
import Scrollbar from '../Scrollbar/Scrollbar'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Title from '../Header/Header'

const HomeN = () => {
  return (
    <>
    <Hero/>
    <Title/>
    <Home/>
    <Gift/>
    <AboutSection/>
    <Scrollbar/>
    <Footer/>
    </>
  )
}

export default HomeN
