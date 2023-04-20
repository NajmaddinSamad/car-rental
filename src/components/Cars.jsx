import React from 'react'
import './style/CarRental.css'
const Cars = ({carName,carPhoto}) => {
  return (
    <>

    <div className="car col-12 col-md-6 col-lg-4">
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

export default Cars