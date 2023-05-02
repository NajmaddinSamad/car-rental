import React   from 'react'
import './style/Normalize.css'
import './style/CarSection.css'
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLuggage } from "react-icons/md";
import { TbEngine } from "react-icons/tb";
const CarsCard = ({imgCard1, imgCard2,carName, carModel,passengerCount, luggageCount, transmission, price }) => {
  return (
  <>
  <div className="col-12 col-md-6 col-lg-4">
    <div className="everything-about-cars">
    <div className="img-cars">
  <img src={imgCard1} alt="" />

    </div>
  <div className="down">
  <div className="about-cars-left">
    <h3>{carName + "    "}{carModel}</h3>
      <span>
        <AiFillStar className='blue-star'/>
        <AiFillStar className='blue-star'/>
        <AiFillStar className='blue-star'/>
        <AiFillStar className='blue-star'/>
        <AiOutlineStar className='empty-star'/>
       
      <h6>4 reviews</h6>
      </span>
   <div className="count-luggage">
   <div className="passenger">
    <BsFillPersonFill/>
        <h6>{passengerCount}</h6>
      </div>
      <div className="luggage">
        <MdLuggage/>
        <h6>{luggageCount}</h6>
      </div>
      <div className="transmission">
        <TbEngine/>
        <h6>
          {transmission}</h6>
      </div>
   </div>
    </div>
    <div className="about-cars-right">
      <h6>$</h6>
      <h1>{price}</h1>
      <h5>Per Day</h5>
    </div>
  </div>
  </div>
  
    </div>
   
  </>
  )
}

export default CarsCard