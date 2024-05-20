import React from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content'
import Cards from './components/Cards'
import Footer from './components/Footer'
// import Canvas from './components/Canvas'
import ParticlesComponent from './components/particle'

function App() {
  return (
    <>
      <ParticlesComponent id="particles" />
      {/* <Canvas/> */}
      <Header/>
      <Navbar/>
      <Hero/>
      <Content/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default App
