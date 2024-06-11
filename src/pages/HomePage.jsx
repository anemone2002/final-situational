import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default HomePage;