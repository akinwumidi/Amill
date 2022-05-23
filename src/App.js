import React from 'react'
import './App.css'
import { Navbar, Brand, Cta } from './components/'
import { Header, Blog, Footer, Features, Possibility, Wamill } from "./containers/"
const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Wamill />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
