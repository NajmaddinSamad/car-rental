import {React, useEffect,} from 'react'
import "../assets/style/Normalize.css";
import "../assets/style/TouchWithUs.css";
import Button from './Buttons'
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

const TouchWithUs = () => {
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
  }, []);

  return (
    <>
      <section className="touch-with-us row">
        <div className="for-touch-with-us-form col-12 col-md-7 col-lg-7" data-aos="zoom-in-right">
          <h2>Get In Touch With Us</h2>
          <h6>This is sample of sub title.</h6>
          <form onSubmit={formik.handleSubmit} className="get-in-touch">
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

            <Button valueOfButton="Send" nameOfClass="touch-with-us-send" />
          </form>
        </div>
      </section>
    </>
  );
};

export default TouchWithUs;