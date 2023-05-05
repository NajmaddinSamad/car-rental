import React from 'react'
import './style/Normalize.css'
import './style/ContactUsSection.css'
import Button from './Buttons'
import { TfiFacebook } from "react-icons/tfi";
import { GrTwitter } from "react-icons/gr";
import { TfiYoutube } from "react-icons/tfi";
import { TfiPinterestAlt } from "react-icons/tfi";
import { SiInstagram } from "react-icons/si";

const ContactUsSection = () => {
  return (
    <>
        <section className="contact-us">
  <div className="for-contact-us-form">
  <h2>Just over a month into my trip and I wonder how I’ve changed, if at all. Certainly the <br /> experiences I’ve had and things I’ve seen have shaped me in someway.</h2>
    <div className="social-contact">
    <span>< TfiFacebook/></span>
    <span><GrTwitter/></span>
    <span><TfiYoutube/></span>
    <span><TfiPinterestAlt/></span>
    <span> <SiInstagram/></span>
    </div>
  <form action="#" className="contact-form">
            <label htmlFor="">Your Name*</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Your Email*</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Subject</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Your Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <Button valueOfButton="Send" nameOfClass="contact-us-send"/>
        </form>
  </div>
    </section>
    </>
  )
}

export default ContactUsSection