import React, {useRef} from 'react'
import './style/Normalize.css'
import './style/Navbar.css'
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
const Navbar = () => {

    const offcanvasRef = useRef();
    const openOffcanvas = (e)=>{
        const clicked = e.target;
        if(clicked.classList.contains('bar-icon')){
          offcanvasRef.current.classList.add('is-active');
        }
      };
      const closeOffcanvas = (e)=>{
        const clicked = e.target;
        if(clicked.classList.contains('x-icon')){
          offcanvasRef.current.classList.remove('is-active');
        }
      };
    
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
            <li>
               <Link  to="/booking">booking</Link>
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
        <h5>for more information</h5>
        <span><GiSmartphone className='phone-icon' /><Link  to="tell:1-567-124-44227">1-567-124-44227</Link></span>
        <span><CiClock2 className='clock-icon'/><Link  to="">Mon - Sat 8.00 - 18.00</Link></span>
        <div className="social">
            <AiFillFacebook className='face'/>
            <TbBrandTwitter className='twitter' />
            <TfiYoutube className='youtube'/>
            <TfiPinterestAlt className='pinterest' />
            <SiInstagram className='insta'/>
        </div>
    </div>
 <nav className="my-navbar">
    <div className="logo">
        <img src="	https://grandcarrentalv1.b-cdn.net/wp-content/themes/grandcarrental/images/logo@2x_white.png" alt="" />
    </div>
    <div className="my-links">
        <ul className='ul-links'>
            <li>
               <Link  to="/">home</Link>
            </li>
            <li>
               <Link  to="/cars">cars</Link>
            </li>
            <li>
               <Link  to="/booking">booking</Link>
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
  <BsWhatsapp className='whatsapp-icon'/>
 </aside>
    </>
  )
}

export default Navbar