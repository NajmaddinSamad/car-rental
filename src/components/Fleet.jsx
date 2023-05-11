import {React, useEffect} from 'react'
import './style/Normalize.css'
import './style/Fleet.css'
import Button from './Buttons'
import backVideo from "../bgvideo/Lexus Exclusive Limousine Service.mp4"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Fleet = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
<>
<section className="fleet">
<video autoPlay muted loop id="myVideo">
  <source src={backVideo} type="video/mp4"/>
</video>

    <h3  data-aos="zoom-in">
        our fleet, your fleet
    </h3>
    <p  data-aos="zoom-in">
    We know the difference is in the details and that’s why our car rental services, in the tourism <br />
and business industry, stand out for their quality and good taste, to offer you an unique experience
    </p>

    <a href="tell:(54)-344-4533-4"  data-aos="zoom-in">Call Now (54)-344-4533-4</a>
<Button nameOfClass='fleet-btn' valueOfButton='Request a Quote'  data-aos="zoom-in"/>
</section>

</>
  )
}

export default Fleet