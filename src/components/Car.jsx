import {React, useEffect} from 'react'
import '../assets/style/CarRental.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Car = ({carName,carPhoto}) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>

    <div className="car col-12 col-md-6 col-lg-4" data-aos="fade-up"  data-aos-duration="500">
<div children className='for-img' >
  <img src={carPhoto} alt="" />
  <h3>
{carName}
  </h3>
</div>
    
    </div>
   
    </>
  )
}

export default Car