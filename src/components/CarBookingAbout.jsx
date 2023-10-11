import React, { useEffect, useState } from "react";
import "../assets/style/Normalize.css";
import "../assets/style/CarBookingAbout.css";
import { AiFillStar, AiOutlineStar, AiOutlineCheck, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill, BsAlarm } from "react-icons/bs";
import { MdLuggage } from "react-icons/md";
import { TbEngine } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Button from "./Buttons";
import CarsCard from "./CarsCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Fullname is required *"),
  email: Yup.string().email("Invalid email").required("Email is required *"),
  pickupAddress: Yup.string().required("Pickup address is required *"),
  dropAddress: Yup.string().required("Drop address is required *"),
  dropDate: Yup.string().required("Drop date is required *"),
  dropTime: Yup.string().required("Drop time is required *"),
  pickupDate: Yup.string().required("Pickup date is required *"),
  pickupTime: Yup.string().required("Pickup time is required *"),
  phoneNumber: Yup.string().required("Phone number is required *"),
});

const CarBookingAbout = ({ carName, carModel, passengerCount, luggageCount, transmission, doors }) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      pickupAddress: "",
      dropAddress: "",
      dropDate: "",
      dropTime: "",
      pickupDate: "",
      pickupTime: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://res.cloudinary.com/doqjpxywu/raw/upload/v1683540766/AboutCar_dy4uy0"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
 <section className="car-booking-about row">
      <div
        className="left-side-booking col-12 col-md-8 col-lg-8"
        data-aos="fade-up-right"
      >
        <div className="left-side-booking-up">
          <h1>Audi A4</h1>
          <h6>
            <span>

              <AiFillStar />
            </span>
            <span>
   
              <AiFillStar />
            </span>
            <span>
      
              <AiFillStar />
            </span>
            <span>
           
              <AiFillStar />
            </span>
            <span>
              <AiOutlineStar />
            </span>

            <span>4 reviews</span>
          </h6>
        </div>
        <div className="left-side-booking-down">
          <div className="left-side-down-icons row">
            <div className="col-6 col-md-3 col-lg-3">
              <span>
                <BsFillPersonFill />
              </span>
              <h5>5 Passengers</h5>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <span>
                <MdLuggage />
              </span>
              <h5>2 Luggages</h5>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <span>
                <TbEngine />
              </span>
              <h5>Auto</h5>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <span>
                <FaCarSide />
              </span>
              <h5>4 Doors</h5>
            </div>
          </div>
          <div className="paragraph-about-cars col-12 col-md-12 col-lg-12">
            <h4>Refueling</h4>
            <p>
              Meh synth Schlitz, tempor duis single-origin coffee ea next
              level ethnic fingerstache fanny pack nostrud. Photo booth anim
              8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
              flexitarian Truffaut synth art party deep v chillwave. Seitan
              High Life reprehenderit consectetur cupidatat kogi. Et leggings
              fanny pack, elit bespoke vinyl art party Pitchfork selfies
              master cleanse.
            </p>
          </div>
          <div className="paragraph-about-cars col-12 col-md-12 col-lg-12">
            <h4>Refueling</h4>
            <p>
              Craft beer elit seitan exercitation, photo booth et 8-bit kale
              chips proident chillwave deep v laborum. Aliquip veniam
              delectus, Marfa eiusmod Pinterest in do umami readymade swag.
              Selfies iPhone Kickstarter, drinking vinegar jean vinegar
              stumptown yr pop-up artisan sunt. Craft beer elit seitan
              exercitation, photo booth
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
            <h3 className="include-title col-6 col-md-4 col-lg-4">
              Included
            </h3>
            <div className="first-functions col-6 col-md-8 col-lg-8  row">
              <ul className="audio col-12 col-md-6 col-lg-6">
                <li>
                  <span>
                    <AiOutlineCheck />
                  </span>
                  Audio input
                </li>
                <li>
                  <span>
                    <AiOutlineCheck />
                  </span>
                  Bluetooth
                </li>
                <li>
                  <span>
                    <AiOutlineCheck />
                  </span>
                  Heated seats
                </li>
              </ul>
              <ul className="drive col-12 col-md-6 col-lg-6">
                <li>
                  <span>
                    <AiOutlineCheck />
                  </span>
                  All Wheel drive
                </li>
                <li>
                  <span>
                    <AiOutlineCheck />
                  </span>
                  USB input
                </li>
                <li>
                  <span>
                    <AiOutlineCheck />
                  </span>
                  FM radio
                </li>
              </ul>
            </div>
          </div>
          <div className="not-included row">
            <h3 className="not-include-title col-6 col-md-4 col-lg-4">
              Not-included
            </h3>
            <div className="second-functions col-6 col-md-8 col-lg-8 row">
              <ul className="gps col-12 col-md-6 col-lg-6">
                <li>
                  <span>
                    <RxCross1 />
                  </span>{" "}
                  GPS Navigation
                </li>
              </ul>
              <ul className="sun col-12 col-md-6 col-lg-6">
                <li>
                  <span>
                    <RxCross1 />
                  </span>
                  Sunroof
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="right-side-booking col-12 col-md-4 col-lg-4"
        data-aos="fade-up-left"
      >
        <form className="car-booking" onSubmit={formik.handleSubmit}>
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            id="fullname"
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div
              style={{
                color: "red",
              }}
            >
              {formik.errors.fullName}
            </div>
          ) : null}
          <label htmlFor="email">Email Address:</label>
          <input
        
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <label htmlFor="number">Phone Number:</label>
          <input
            type="text"
         
            name="number"
            id="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
          />
          {formik.touched.number && formik.errors.number ? (
            <div
              style={{
                color: "red",
              }}
            >
              {formik.errors.number}
            </div>
          ) : null}
          <label htmlFor="address">Pickup Address:</label>
          <input
            type="text"
         
            name="address"
            id="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div
              style={{
                color: "red",
              }}
            >
              {formik.errors.address}
            </div>
          ) : null}
          <label htmlFor="pickup-date">Pickup Date:</label>
          <input
            type="date"
            name="pickupDate"
            id="pickup-date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pickupDate}
          />
          {formik.touched.pickupDate && formik.errors.pickupDate ? (
            <div
              style={{
                color: "red",
              }}
            >
              {formik.errors.pickupDate}
            </div>
          ) : null}
          <label htmlFor="pickup-time">Pickup Time:</label>
          <input
            type="time"
            name="pickupTime"
            id="pickup-time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pickupTime}
          />
             {formik.touched.pickupTime && formik.errors.pickupTime ? (
            <div
              style={{
                color: "red",
              }}
            >
              {formik.errors.pickupTime}
            </div>
          ) : null}
          <label htmlFor="drop-address">Drop Off Address:</label>
          <input
            type="text"
            name="dropAddress"
            id="drop-address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dropAddress}
          />
          {formik.touched.dropAddress && formik.errors.dropAddress ? (
            <div
              style={{
                color: "red",
              }}
            >
              {formik.errors.dropAddress}
            </div>
          ) : null}
          <label htmlFor="drop-date">Drop Off Date:</label>
          <input
            type="date"
            name="dropDate"
            id="drop-date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dropDate}
          />
          {formik.touched.dropDate && formik.errors.dropDate ? (
            <div
              style={{
                color: "red",
              }}
            >
              {formik.errors.dropDate}
            </div>
          ) : null}
          <label htmlFor="drop-time">Drop off Time:</label>
          <input
            type="time"
            name="dropTime"
            id="drop-time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dropTime}
          />
          {formik.touched.dropTime && formik.errors.dropTime ? (
            <div
              style={{
                color: "red",
              }}
            >
              {formik.errors.dropTime}
            </div>
          ) : null}
          <Button
            valueOfButton="Request For Booking"
            nameOfClass="request"
          />
          <div className="for-or-div">
            <span className="for-or">or</span>
          </div>
          <Button valueOfButton="Book Instantly" nameOfClass="book" />
          <div className="sale">
            <p>This car's been viewed 544 times in the past week</p>
            <BsAlarm className="clock" />
          </div>
        </form>
        <button type="submit" className="share">
          <span>
            <AiOutlineMail />{" "}
          </span>{" "}
          Share This Car
        </button>
      </div>

      <div className="similar-cars">
        <div className="similar-cars-up">
          <h4>Similar cars</h4>
        </div>
        <div className="similar-cars-down row">
          {data &&
            data.map((item) => {
              return (
                <CarsCard
                  imgCard1={item.carPhoto1}
                  imgCard2={item.carPhoto2}
                  carName={item.carName}
                  carModel={item.carModel}
                  passengerCount={item.numberOffPassengers}
                  luggageCount={item.luggages}
                  transmission={item.transmission}
                  price={item.price}
                />
              );
            })}
        </div>
      </div>
    </section>
    </>
  );
};

export default CarBookingAbout;
