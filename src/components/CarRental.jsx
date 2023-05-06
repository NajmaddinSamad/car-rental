import {React, useEffect } from 'react'
import './style/Normalize.css'
import './style/CarRental.css'
import Car from './Car'
import DataOfCars from '../AboutCar.json'
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarRental = () => {
  useEffect(() => {
    AOS.init();
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
    {
      DataOfCars.map(data=>(
        <Car carName = {data.carName} carPhoto={data.carPhoto1} />
      ))
    }

    </section>
    </>
  )
}

export default CarRental