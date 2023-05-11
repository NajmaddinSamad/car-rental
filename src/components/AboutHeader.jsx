import {React, useEffect} from 'react'
import '../assets/style/Normalize.css'
import '../assets/style/AboutHeader.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutHeader = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
   <>
   <header className="about-header">
    <h1 data-aos="zoom-in">We are Grand Car Rental Best Car <br /> Rental WordPress Theme</h1>
    <h6 data-aos="zoom-in">Car rental, limousine, and car hire. All in one service.</h6>
   </header>
   
   </>
  )
}

export default AboutHeader