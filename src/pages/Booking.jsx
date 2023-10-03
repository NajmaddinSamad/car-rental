import React from 'react'
import CarBookingHeader from '../components/CarBookingHeader'
import CarBookingAbout from '../components/CarBookingAbout'
import { Helmet } from 'react-helmet'

const Booking = () => {
  return (
   <>
   <Helmet>
    <title>
      Booking page
    </title>
   </Helmet>

   <CarBookingHeader/>
   <CarBookingAbout/>
   </>
  )
}

export default Booking