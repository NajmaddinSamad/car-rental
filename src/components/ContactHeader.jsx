import {React, useEffect} from 'react'
import './style/Normalize.css'
import './style/ContactHeader.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactHeader = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <header className="contact-header">
        <h2 data-aos="zoom-in">Contact Us</h2>
        <h6 data-aos="zoom-in">This is sample of page tagline and you can set it up using page option</h6>
    </header>
    
    </>
  )
}

export default ContactHeader