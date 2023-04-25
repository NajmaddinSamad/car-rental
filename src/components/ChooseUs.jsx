import React from 'react'
import './style/Normalize.css'
import './style/ChooseUs.css'
import { FaCarSide } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
const ChooseUs = () => {
  return (
<>
<section className="section choose-us row">
<h2>Why Choose Us</h2>
<h6>Explore our first class limousine & car rental services</h6>

    < div className="choose-card col-12 col-md-4 col-lg-4">
        <FaCarSide className='choose-car'/>
<h3>Variety of Car Brands</h3>
<p>Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.</p>
    </div>
    <div className="choose-card col-12 col-md-4 col-lg-4">
        <BsEmojiSmile className='choose-smile'/>
<h3>Best Rate Guarantee</h3>
<p>Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.</p>
    </div>
    <div className="choose-card col-12 col-md-4 col-lg-4">
       <AiOutlineHeart className='choose-heart'/> 
<h3>Awesome Customer Support</h3>
<p>Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.</p>
    </div>
</section>

</>
  )
}

export default ChooseUs 