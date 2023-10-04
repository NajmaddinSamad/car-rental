import React, { useState, useEffect } from "react";
import '../assets/style/Normalize.css';
import '../assets/style/CarSection.css';
import CarsCard from './CarsCard';

const CarSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://res.cloudinary.com/doqjpxywu/raw/upload/v1683540411/AboutCar_jliy1a.json");
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
    <main className="everything-for-cars row">
      {data &&
        data.map((item) => (
          <CarsCard
            key={item.id}
            imgCard1={item.carPhoto1}
            imgCard2={item.carPhoto2}
            carName={item.carName}
            carModel={item.carModel}
            passengerCount={item.numberOffPassengers}
            luggageCount={item.luggages}
            transmission={item.transmission}
            price={item.price}
          />
        ))}
    </main>
  );
}

export default CarSection;
