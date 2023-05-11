import {React, useEffect} from 'react'
import '../assets/style/Normalize.css'
import '../assets/style/ContactUsSection.css'
import Button from './Buttons'
import { TfiFacebook } from "react-icons/tfi";
import { GrTwitter } from "react-icons/gr";
import { TfiYoutube } from "react-icons/tfi";
import { TfiPinterestAlt } from "react-icons/tfi";
import { SiInstagram } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required *'),
  email: Yup.string().email('Invalid email').required('Email is required *'),
  message: Yup.string().required('Message is required *'),
  subject: Yup.string().required('subject is required *'),
});
const ContactUsSection = () => {
    const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      subject: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
        <section className="contact-us" data-aos="zoom-in">
  <div className="for-contact-us-form">
  <h2>Just over a month into my trip and I wonder how I’ve changed, if at all. Certainly the <br /> experiences I’ve had and things I’ve seen have shaped me in someway.</h2>
    <div className="social-contact">
    <span>< TfiFacebook/></span>
    <span><GrTwitter/></span>
    <span><TfiYoutube/></span>
    <span><TfiPinterestAlt/></span>
    <span> <SiInstagram/></span>
    </div>
 <form onSubmit={formik.handleSubmit} className="contact-form">
            <label htmlFor="name">Your Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? <div style={{
              color: 'red'}}>{formik.errors.name}</div> : null}

            <label htmlFor="email">Your Email*</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <div style={{
              color: 'red'}}>{formik.errors.email}</div> : null}

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject ? <div style={{
              color: 'red'}}>{formik.errors.subject}</div> : null}

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              cols="30"
              rows="10"
            />
            {formik.touched.message && formik.errors.message ? <div style={{
              color: 'red'}}>{formik.errors.message}</div> : null}

            <Button valueOfButton="Send" nameOfClass="contact-us-send" />
          </form>
  </div>
    </section>
    </>
  )
}

export default ContactUsSection