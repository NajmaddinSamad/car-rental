import React, { useState, useEffect } from 'react';
import '../assets/style/Normalize.css';
import '../assets/style/CarRental.css';
import Car from './Car';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarRental = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://res.cloudinary.com/doqjpxywu/raw/upload/v1683540766/AboutCar_dy4uy0");
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <section className="car-rental row" data-aos="fade-up-right">
        <h2 className="first-class">First Class Car Rental & Limousine Services</h2>
        <h6 className="we-offer">We offer professional car rental & limousine services in our range of high-end vehicles</h6>
        {data.map((item) => (
          <Car key={item.id} carName={item.carName} carPhoto={item.carPhoto1} />
        ))}
      </section>
    </>
  );
};

export default CarRental;
