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
               <a href="#">home</a>
            </li>
            <li>
               <a href="#">cars</a>
            </li>
            <li>
               <a href="#">boking</a>
            </li>
            <li>
               <a href="#">services</a>
            </li>
            <li>
               <a href="#">about</a>
            </li>
            <li>
               <a href="#">contact</a>
            </li>
        </ul>
        <h5>for more information</h5>
        <span><GiSmartphone className='phone-icon' /><a href="tell:1-567-124-44227">1-567-124-44227</a></span>
        <span><CiClock2 className='clock-icon'/><a href="">Mon - Sat 8.00 - 18.00</a></span>
        <div className="social">
            <AiFillFacebook className='face'/>
            <TbBrandTwitter className='twitter' />
            <TfiYoutube className='youtube'/>
            <TfiPinterestAlt className='pinterest' />
            <SiInstagram className='insta'/>
        </div>
    </div>
 <nav className="navbar">
    <div className="logo">
        <img src="	https://grandcarrentalv1.b-cdn.net/wp-content/themes/grandcarrental/images/logo@2x_white.png" alt="" />
    </div>
    <div className="links">
        <ul className='ul-links'>
            <li>
               <a href="#">home</a>
            </li>
            <li>
               <a href="#">cars</a>
            </li>
            <li>
               <a href="#">boking</a>
            </li>
            <li>
               <a href="#">services</a>
            </li>
            <li>
               <a href="#">about</a>
            </li>
            <li>
               <a href="#">contact</a>
            </li>
     
          
        </ul>
       < GoThreeBars className='bar-icon' onClick={openOffcanvas}/>
    </div>
 </nav>
    </>
  )
}

export default Navbar