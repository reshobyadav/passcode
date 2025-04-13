import React from 'react'
import Navbar from './components/navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Manager/>
      </div>
      <Footer/>
    </>
  )
}

export default App

