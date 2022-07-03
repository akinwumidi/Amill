import React from 'react'
import './App.css'
import { Navbar, Brand, Cta } from './components/'
import { Header, Footer, Features, Possibility, Wamill } from "./containers/"
import ProgressBar from 'react-progressbar-on-scroll'

const App = () => {
  return (
    <>
      <ProgressBar
        color="#b3195c"
        gradient={true}
        gradientColor="#e55812"
        height={5}
      />
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Wamill />
      <Features />
      <Possibility />
      <Cta />
      <Footer />
    </>
  )
}

export default App
