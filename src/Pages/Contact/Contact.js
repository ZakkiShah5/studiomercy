import React from 'react'
import Header from '../../Components/Header/Header' 
import Footer from '../../Components/Footer/Footer'
import Sponsor from '../../Components/Sponsors/Sponsor'
import Contactform from '../../Components/ContactForm/Contactform'

const Contact = () => {
  return (
    <div>
        <Header/>
        <Contactform/>
        <Sponsor/>
        <Footer/>
    </div>
  )
}

export default Contact