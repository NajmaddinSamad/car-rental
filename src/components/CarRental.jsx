import {React} from 'react'
import { useState, useEffect } from "react";
import '../assets/style/Normalize.css'
import '../assets/style/CarRental.css'
import Car from './Car'
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarRental = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://res.cloudinary.com/doqjpxywu/raw/upload/v1683540766/AboutCar_dy4uy0")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);


  return (
    <>
 
    <section className="car-rental row"  data-aos="fade-up-right">

    <h2 className="first-class">
First Class Car Rental & Limousine Services
</h2>
<h6 className="we-offer">
We offer professional car rental & limousine services in our range of high-end vehicles
</h6>
{data && data.map((item) => {
  return <Car carName = {item.carName} carPhoto={item.carPhoto1} />
        })}

    </section>
    </>
  )
}

export default CarRental