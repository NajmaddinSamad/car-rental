import React from 'react'
import './style/Normalize.css'
import './style/Header.css'
import Buttons from './Buttons'
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Header = () => {
  return (
 <>
 <aside className="add">
  <BsCart3 className='cart-icon'/>
  <AiOutlineHeart className='heart-icon'/>
  <BsWhatsapp className='whatsapp-icon'/>
 </aside>
<header className="home-header">
  <div className="h-content">
  <h1 className="header-content">
    Find Best Car & Limousine
    </h1>
    <h6 className='price'>
      From as low as $10 per day with limited time offer discount
    </h6>
  </div>
   <div className="search-box row">
   
   <select name="" id="" className=" col-12 col-md-2 col-lg-2 select">
      <option value="Any brand">Any brand</option>
      <option value="Audi">Audi</option>
      <option value="Bmw">Bmw</option>
      <option value="Lexus">Lexus</option>
      <option value="Mercedes">Mercedes</option>
      <option value="Hundai">Hundai</option>
    </select>
    <select name="" id="" className=" col-12 col-md-2 col-lg-2 select">
      <option value="Any type">Any type</option>
      <option value="Sedan">Sedan</option>
      <option value="Couple">Couple</option>
      <option value="Suv">Suv</option>
    </select>
    <select name="" id="" className=" col-12 col-md-2 col-lg-2  select">
      <option value="price">Price</option>
      <option value="price Low to High">price Low to High</option>
      <option value="High to Low">High to Low</option>
      <option value="Sort by Review Score">Sort by Review Score</option>
    </select>
    <Buttons nameOfClass='col-12 col-md-2 col-lg-2 search-btn' valueOfButton='search'/>
   </div>

</header>
 </>
  )
}

export default Header