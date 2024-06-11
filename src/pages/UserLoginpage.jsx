import React from 'react'
import LoginForm from '../components/LoginForm'
import Header from '../components/Header';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Footer from '../components/Footer'

const UserLoginpage = () => {
  return (
    <div>
         <Header/>
        <Home/>
        <LoginForm/>
        <Contact/>
      <Footer/>
    </div>
  )
}

export default UserLoginpage