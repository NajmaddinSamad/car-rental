import React, {useRef, useEffect} from 'react'
import '../assets/style/Normalize.css'
import '../assets/style/Navbar.css'
import { GoThreeBars } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import { AiFillFacebook } from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { TfiYoutube } from "react-icons/tfi";
import { TfiPinterestAlt } from "react-icons/tfi";
import { SiInstagram } from "react-icons/si";
import { GiSmartphone } from "react-icons/gi";
import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Navbar = () => {

    const offcanvasRef = useRef();
    const openOffcanvas = (e)=>{
        const clicked = e.target;
        if(clicked.classList.contains('bar-icon')){
          offcanvasRef.current.classList.toggle('is-active');
        }
      };
      const closeOffcanvas = (e)=>{
        const clicked = e.target;
        if(clicked.classList.contains('x-icon')){
          offcanvasRef.current.classList.remove('is-active');
        }
      };
      useEffect(() => {
         AOS.init();
       }, [])
    
  return (
    <>
    <div className="off-canvas" ref={offcanvasRef} >
        < RxCrossCircled className='x-icon ' onClick={closeOffcanvas} />
        <ul className='off-canvas-links'>
        <li>
               <Link  to="/">home</Link>
            </li>
            <li>
               <Link  to="/cars">cars</Link>
            </li>
            {/* <li>
               <Link  to="/booking">booking</Link>
            </li> */}
            <li>
               <Link  to="/services">services</Link>
            </li>
            <li>
               <Link  to="/about">about</Link>
            </li>
            <li>
               <Link  to="/contact">contact</Link>
            </li>
        </ul>
        <h3 className='for-h3'>for more information</h3>
        <span><span><GiSmartphone className='phone-icon' /></span><a  href="tell:1-567-124-44227">1-567-124-44227</a></span>
        <span><span><CiClock2 className='clock-icon'/></span><a  href="#">Mon - Sat 8.00 - 18.00</a></span>
        <div className="social">
            <AiFillFacebook className='face'/>
            <TbBrandTwitter className='twitter' />
            <TfiYoutube className='youtube'/>
            <TfiPinterestAlt className='pinterest' />
            <SiInstagram className='insta'/>
        </div>
    </div>
 <nav className="my-navbar" data-aos="fade-down"  data-aos-duration="500">
    <div className="logo" data-aos="fade-right"  data-aos-duration="700">
        <img src="	https://grandcarrentalv1.b-cdn.net/wp-content/themes/grandcarrental/images/logo@2x_white.png" alt="" />
    </div>
    <div className="my-links" data-aos="fade-left"  data-aos-duration="700">
        <ul className='ul-links'>
            <li>
               <Link  to="/">home</Link>
            </li>
            <li>
               <Link  to="/cars">cars</Link>
            </li>
            <li>
               <Link  to="/services">services</Link>
            </li>
            <li>
               <Link  to="/about">about</Link>
            </li>
            <li>
               <Link  to="/contact">contact</Link>
            </li>
     
          
        </ul>
       < GoThreeBars className='bar-icon' onClick={openOffcanvas}/>
    </div>
 </nav>
 <aside className="add">
  <BsCart3 className='cart-icon'/>
  <AiOutlineHeart className='heart-icon'/>
  <a aria-label="Chat on WhatsApp" href="https://wa.me/994709909509"> <BsWhatsapp className='whatsapp-icon'/></a>
 </aside>
    </>
  )
}

export default Navbar