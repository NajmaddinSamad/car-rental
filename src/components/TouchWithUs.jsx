import {React, useEffect} from 'react'
import "./style/Normalize.css";
import "./style/TouchWithUs.css";
import Button from './Buttons'
import AOS from 'aos';
import 'aos/dist/aos.css';
const TouchWithUs = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <section className="touch-with-us row">
  <div className="for-touch-with-us-form col-12 col-md-6 col-lg-6" data-aos="zoom-in-right">
  <h2>Get In Touch With Us</h2>
            <h6>This is sample of sub title.</h6>
  <form action="#" className="get-in-touch">
            <label htmlFor="">Your Name*</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Your Email*</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Subject</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Your Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <Button valueOfButton="Send" nameOfClass="touch-with-us-send"/>
        </form>
  </div>
    </section>
    </>
  )
}

export default TouchWithUs