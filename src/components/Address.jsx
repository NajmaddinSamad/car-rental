import {React, useEffect} from 'react'
import './style/Normalize.css'
import './style/Address.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Address = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
   <>
   <section className="address row">
    <div className="address-left col-12 col-md-6 col-lg-6" data-aos="zoom-in-right">
        <div className="fon"></div>
        <h2>California</h2>
        <h4>78 Collective Street</h4>
        <h4>Manhattan</h4>
        <h4>Kingston</h4>
        <h4>United State</h4>
    </div>
    <div className="address-right col-12 col-md-6 col-lg-6" data-aos="zoom-in-left">
    <div className="fon"></div>
        <h2>London</h2>
        <h4>732/21 Second Street</h4>
        <h4>King Street</h4>
        <h4>Kingston</h4>
        <h4>United Kingdom</h4>
    </div>
   </section>
   
   </>
  )
}

export default Address