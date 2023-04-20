import React from 'react'
import './style/Normalize.css'
import './style/CarRental.css'
import Cars from './Cars'
import DataOfCars from '../AboutCar.json'

const CarRental = () => {

  return (
    <>
    <section className="car-rental row">

    <h2 className="first-class">
First Class Car Rental & Limousine Services
</h2>
<h6 className="we-offer">
We offer professional car rental & limousine services in our range of high-end vehicles
</h6>
    {
      DataOfCars.map(data=>(
        <Cars carName = {data.carName} carPhoto={data.carPhoto1} />
      ))
    }

    </section>
    </>
  )
}

export default CarRental