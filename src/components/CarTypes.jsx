import {React, useEffect} from 'react'
import '../assets/style/CarTypes.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const CarTypes = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>    
    <section className="car-types row">
    <h2 className="find-car">
      Find Car by Type
      </h2>
      <h6 className="we-offer-type">
      We offer professional car rental & limousine services in our range of high-end vehicles
      </h6>
      <div className="col-12 col-md-4 col-lg-4 type" data-aos="zoom-in-right">
     <div className="for-img-type">
      <img src='https://www.bmw.co.uk/content/dam/bmw/common/all-models/x-series/x6/2023/highlights/bmw-x-series-x6-sp-desktop.jpg'  />
      <h3>
        SUV
      </h3>
     </div>
    </div>  
    
      <div className="col-12 col-md-4 col-lg-4 type" data-aos="zoom-in-down">
      <div className="for-img-type">
      <img src='https://imgd.aeplcdn.com//642x361//n/cw/ec/51330/hyundai-i20-right-front-three-quarter28.jpeg?wm=1&q=75'  />
      <h3>
        Couple
      </h3>
     </div>
    </div> 
    
       <div className="col-12 col-md-4 col-lg-4 type" data-aos="zoom-in-left">
       <div className="for-img-type">
      <img src='https://media.ed.edmunds-media.com/hyundai/sonata/2021/oem/2021_hyundai_sonata_sedan_limited_fq_oem_1_1600.jpg'  />
      <h3>
        Sedan
      </h3>
     </div>
   
       </div>
     </section>
    
    </>
  )
}

export default CarTypes