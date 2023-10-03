import React from 'react'
import ServicesHeader from '../components/ServicesHeader'
import ServicesSection from '../components/ServicesSection'
import { Helmet } from 'react-helmet'

const Services = () => {
  return (
  
    <>
    <Helmet>
      <title>
        Services page
      </title>
    </Helmet>
    <ServicesHeader/>
    <ServicesSection/>
    </>
  )
}

export default Services