import React from 'react'
import AboutHeader from '../components/AboutHeader'
import Adventure from '../components/Adventure'
import TouchWithUs from '../components/TouchWithUs'
import OurTeam from '../components/OurTeam'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <>
    <Helmet>
      <title>About page</title>
    </Helmet>
   <AboutHeader/>
   <Adventure/>
   <TouchWithUs/>
   <OurTeam/>
    
    </>
  )
}

export default About