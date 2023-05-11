import React from 'react'
import '../assets/style/Normalize.css'
import '../assets/style/CarBookingHeader.css'
import { FiCamera } from "react-icons/fi"
import { BsPlay } from "react-icons/bs";

const CarBookingHeader = () => {
  return (
   <>
   <header className="car-booking-header row">
    <div className="show-btn col-12 col-md-8 col-lg-8 ">
      <button className="view-photos"><span><FiCamera/></span> View Photos</button>
      <button className="video-review"><span><BsPlay/></span> Video Review</button>
    </div>
    <div className="price-hour  col-12 col-md-4 col-lg-4 ">
    <div className="price-hour-left"><span>56</span></div>
    <div className="price-hour-right">
    <select className='select-price' name="" id="">
        <option value="Per Day">Per Day</option>
        <option value="Per Hour">Per Hour</option>
        <option value="Airport Transfer">Airport Transfer</option>
      </select>
    </div>
    </div>

   </header>
   
   </>
  )
}

export default CarBookingHeader