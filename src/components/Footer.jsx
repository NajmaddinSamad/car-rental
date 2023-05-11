import {React,useEffect, useState} from 'react'
import '../assets/style/Normalize.css'
import '../assets/style/Footer.css'
import Button from './Buttons'
import { MdOutlinePlace } from "react-icons/md";
import { TfiFacebook } from "react-icons/tfi";
import { GrTwitter } from "react-icons/gr";
import { TfiYoutube } from "react-icons/tfi";
import { TfiPinterestAlt } from "react-icons/tfi";
import { SiInstagram } from "react-icons/si";
import { GiSmartphone } from "react-icons/gi";
import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
    useEffect(() => {
        AOS.init();
      }, []);
     
  return (
   <>
   <footer className="row"  >
    <div className="about-us col-12 col-md-4 col-lg-4">
        <h4>About Us</h4>
        <p>Getting dressed up and traveling with good friends makes for a shared, unforgettable experience.</p>
        <img src="https://grandcarrentalv1.b-cdn.net/wp-content/themes/grandcarrental/images/logo@2x_white.png" alt="" />
    </div>
    <div className="contact-info col-12 col-md-4 col-lg-4">
<h4>Contact Info</h4>
<span><GiSmartphone/><a href="tell:1-567-124-44227">1-567-124-44227</a></span>
<span><MdOutlinePlace/><a href="#">184 Main Street East Perl Habour 8007</a></span>
<span><CiClock2/><a href="#">Mon - Sat 8.00 - 18.00 Sunday CLOSED</a></span>

<div className="social-links-footer">
    <span>< TfiFacebook/></span>
    <span><GrTwitter/></span>
    <span><TfiYoutube/></span>
    <span><TfiPinterestAlt/></span>
    <span> <SiInstagram/></span>
</div>


    </div>
    <form className="newsletter col-12 col-md-4 col-lg-4">
        <h4>Newsletter</h4>
        <p>Don't miss a thing! Sign up to receive daily deals</p>
        <input type="text" name="" id="" placeholder='Your Email Address' />
       <Button valueOfButton='Subscribe'  nameOfClass='subscribe-btn'/>
    </form>

    <div className="creater row">
       
       <div className="left-side-footer col-12 col-md-6 col-lg-6">
<p>&copy; Created by Najmaddin Samad</p>
       </div>
       <div className="right-side-footer col-12 col-md-6 col-lg-6">
        <Link to="/cars">Cars</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
       </div>
    </div>

   </footer>
   </>
  )
}

export default Footer