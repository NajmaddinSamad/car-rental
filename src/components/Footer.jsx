import React from 'react'
import './style/Normalize.css'
import './style/Footer.css'
import Buttons from './Buttons'
import { MdOutlinePlace } from "react-icons/md";
import { TfiFacebook } from "react-icons/tfi";
import { GrTwitter } from "react-icons/gr";
import { TfiYoutube } from "react-icons/tfi";
import { TfiPinterestAlt } from "react-icons/tfi";
import { SiInstagram } from "react-icons/si";
import { GiSmartphone } from "react-icons/gi";
import { CiClock2 } from "react-icons/ci";
const Footer = () => {
  return (
   <>
   <footer className="row">
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
    <a href="https://facebook.com" className='face-icon'>< TfiFacebook/></a>
    <a href="https://twitter.com" className='twit-icon'><GrTwitter/></a>
    <a href="https://youtube.com" className='youtube-icon'><TfiYoutube/></a>
    <a href="https://pinterest.com" className='pinterest-icon'><TfiPinterestAlt/></a>
    <a href="https://instagram.com" className='insta-icon'> <SiInstagram/></a>
</div>


    </div>
    <form className="newsletter col-12 col-md-4 col-lg-4">
        <h4>Newsletter</h4>
        <p>Don't miss a thing! Sign up to receive daily deals</p>
        <input type="text" name="" id="" placeholder='Your Email Address' />
       <Buttons valueOfButton='Subscribe'  nameOfClass='subscribe-btn'/>
    </form>

    <div className="creater row">
       
       <div className="left-side-footer col-12 col-md-6 col-lg-6">
<p>&copy; Created by Najmaddin Samad</p>
       </div>
       <div className="right-side-footer col-12 col-md-6 col-lg-6">
        <a href="#">Cars</a>
        <a href="#">Booking</a>
        <a href="#">services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
       </div>
    </div>

   </footer>
   </>
  )
}

export default Footer