import React from 'react'
import './style/Normalize.css'
import './style/CarSection.css'
import carData from '../AboutCar.json'
import CarsCard from './CarsCard'

const CarSection = () => {
  return (
   <>
   <main className="everything-for-cars row">
{carData.map(data=>(
  <CarsCard imgCard1={data.carPhoto1} imgCard2={data.carPhoto2} carName={data.carName} carModel={data.carModel} passengerCount={data.numberOffPassengers} luggageCount={data.luggages} transmission={data.transmission} price={data.price}/>
))
}
   </main>
   
   </>
  )
}

export default CarSection