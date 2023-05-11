import React from 'react'
import './style/Normalize.css'
import './style/CarSection.css'
import CarsCard from './CarsCard'
import { useState, useEffect } from "react";


const CarSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://res.cloudinary.com/doqjpxywu/raw/upload/v1683540411/AboutCar_jliy1a.json")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);

  return (
   <>
   <main className="everything-for-cars row">
{data &&
        data.map((item) => {
          return <CarsCard imgCard1={item.carPhoto1} imgCard2={item.carPhoto2} carName={item.carName} carModel={item.carModel} passengerCount={item.numberOffPassengers} luggageCount={item.luggages} transmission={item.transmission} price={item.price}/>
        })}

   </main>
   
   </>
  )
}

export default CarSection