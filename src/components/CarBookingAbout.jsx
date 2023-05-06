import React from "react";
import "./CarsCard";
import "./style/Normalize.css";
import "./style/CarBookingAbout.css";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BsAlarm } from "react-icons/bs";
import { MdLuggage } from "react-icons/md";
import { TbEngine } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Buttons from './Buttons'
import CarsCard from "./CarsCard";
import carData from '../AboutCar.json'

const CarBookingAbout = ({carName, carModel, passengerCount, luggageCount,transmission,doors }) => {
  return (
    <>
      <section className="car-booking-about row">
        <div className="left-side-booking col-12 col-md-8 col-lg-8">
        <div className="left-side-booking-up">
          <h1>Audi A4</h1>
          <h6>
  <span> <AiFillStar/></span>
  <span> <AiFillStar/></span>
  <span> <AiFillStar/></span>
  <span> <AiFillStar/></span>
  <span><AiOutlineStar/></span>
                
                  <span>4 reviews</span>
          </h6>
        </div>
        <div className="left-side-booking-down">
      <div className="left-side-down-icons row">
      <div className="col-6 col-md-3 col-lg-3">
            <span><BsFillPersonFill/></span><h5>5 Passengers</h5>
          </div>
          <div className="col-6 col-md-3 col-lg-3">
            <span><MdLuggage/></span><h5>2 Luggages</h5>
          </div>
          <div className="col-6 col-md-3 col-lg-3">
            <span><TbEngine/></span><h5>Auto</h5>
          </div>
          <div className="col-6 col-md-3 col-lg-3">
            <span><FaCarSide/></span><h5>4  Doors</h5>
          </div>
      </div>
      <div className="paragraph-about-cars col-12 col-md-12 col-lg-12">
            <h4>Refueling</h4>
            <p>
              Meh synth Schlitz, tempor duis single-origin coffee ea next level
              ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit
              hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
              flexitarian Truffaut synth art party deep v chillwave. Seitan High
              Life reprehenderit consectetur cupidatat kogi. Et leggings fanny
              pack, elit bespoke vinyl art party Pitchfork selfies master
              cleanse.
            </p>
          </div>
          <div className="paragraph-about-cars col-12 col-md-12 col-lg-12">
            <h4>Refueling</h4>
            <p>
              Craft beer elit seitan exercitation, photo booth et 8-bit kale
              chips proident chillwave deep v laborum. Aliquip veniam delectus,
              Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone
              Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up
              artisan sunt. Craft beer elit seitan exercitation, photo booth
            </p>
          </div>
          <div className="paragraph-about-cars col-12 col-md-12 col-lg-12">
            <h4>No Smoking</h4>
            <p>
              See-through delicate embroidered organza blue lining luxury
              acetate-mix stretch pleat detailing. Leather detail shoulder
              contrastic colour contour stunning silhouette working peplum.
              Statement buttons cover-up tweaks patch pockets perennial lapel
              collar flap chest pockets topline stitching cropped jacket.
              Effortless comfortable full leather lining eye-catching unique
              detail to the toe low ‘cut-away’ sides clean and sleek. Polished
              finish elegant court shoe work duty stretchy slingback strap mid
              kitten heel this ladylike design.
            </p>
          </div>
      <div className="included row">
        <h3 className="include-title col-6 col-md-4 col-lg-4">Included</h3>
        <div className="first-functions col-6 col-md-8 col-lg-8  row">
        <ul className="audio col-12 col-md-6 col-lg-6">
          <li><span><AiOutlineCheck/></span>Audio input</li>
          <li><span><AiOutlineCheck/></span>Bluetooth</li>
          <li><span><AiOutlineCheck/></span>Heated seats</li>
        </ul>
        <ul className="drive col-12 col-md-6 col-lg-6">
          <li><span><AiOutlineCheck/></span>All Wheel drive</li>
          <li><span><AiOutlineCheck/></span>USB input</li>
          <li><span><AiOutlineCheck/></span>FM radio</li>
        </ul>
        </div>
      </div>
      <div className="not-included row">
      <h3 className="not-include-title col-6 col-md-4 col-lg-4">Not-included</h3>
        <div className="second-functions col-6 col-md-8 col-lg-8 row">
        <ul className="gps col-12 col-md-6 col-lg-6">
          <li><span><RxCross1/></span> GPS Navigation</li>
        </ul>
        <ul className="sun col-12 col-md-6 col-lg-6">
          <li><span><RxCross1/></span>Sunroof</li>
        </ul>
        </div>
      
 
      </div>
        </div>
        </div>
        <div className="right-side-booking col-12 col-md-4 col-lg-4">
<form action="#" className="car-booking">
  <label htmlFor="">Full Name:
  </label>
  <input type="text" name=""  placeholder="Najmaddin Samad" />
  <label htmlFor="">Email Address:
  </label>
  <input type="email" name="" placeholder="gnecmeddin@gmail.com" />
  <label htmlFor="">Phone Number:
  </label>
  <input type="text" name="" placeholder="709909509" />
  <label htmlFor="">Pickup Address:
  </label>
  <input type="text" name=""placeholder="Gabala Yengija" />
  <label htmlFor="">Pickup Date:
  </label>
  <input type="date" name=""/>
  <label htmlFor="">Pickup Time:
  </label>
  <input type="time" name=""/>
  <label htmlFor="">Drop Off Address:
  </label>
  <input type="text" name=""  placeholder="Baku" />
  <label htmlFor="">Drop Off Date:
  </label>
  <input type="date" name="" />
  <label htmlFor="">Drop off Time:
  </label>
  <input type="time" name=""/>
<Buttons valueOfButton="Request For Booking" nameOfClass="request"/>
<div className="for-or-div">
	<span className="for-or">or</span>
</div>
<Buttons valueOfButton="Book Instantly" nameOfClass="book"/>
<div  className="sale">
  <p>
This car's been viewed 544 times in the past week
</p>
<BsAlarm className="clock"/>
</div>
</form>
<button type="submit" className="share"><span><AiOutlineMail/> </span> Share This Car</button>
        </div>

        <div className="similar-cars">
          <div className="similar-cars-up">
            <h4>Similar cars</h4>
          </div>
          <div className="similar-cars-down row">
            {
              carData.map(data=>(
                <CarsCard imgCard1={data.carPhoto1} imgCard2={data.carPhoto2} carName={data.carName} carModel={data.carModel} passengerCount={data.numberOffPassengers} luggageCount={data.luggages} transmission={data.transmission} price={data.price}/>
              ))
            }
           
          </div>
        </div>
      </section>
    </>
  );
};

export default CarBookingAbout;
