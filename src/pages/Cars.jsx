import React from 'react'
import CarsSearchBar from '../components/CarsSearchBar'
import CarsHeader from '../components/CarsHeader'
import CarSection from '../components/CarSection'
import { Helmet } from 'react-helmet'

const Cars = () => {
  return (
   
    <>
    <Helmet>
      <title>
        Cars page
      </title>
    </Helmet>
 <CarsHeader/>
 <CarsSearchBar/>
 <CarSection/>
    

    </>
  )
}

export default Cars