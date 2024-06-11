import React from 'react'
import RegistrationForm from '../components/RegistrationForm'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Home from '../components/Home'

const RegistrationPage = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <RegistrationForm/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default RegistrationPage