import React from 'react'
import ContactHeader from '../components/ContactHeader'
import ContactUsSection from '../components/ContactUsSection'
import Address from '../components/Address'
import { Helmet } from 'react-helmet'
const Contact = () => {
  return (
   <>
   <Helmet>
    <title>
      Contact page
    </title>
   </Helmet>
   <ContactHeader/>
   <ContactUsSection/>
   <Address/>
   </>
  )
}

export default Contact