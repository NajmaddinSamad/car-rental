import React from 'react'
import './style/Normalize.css'
import './style/Fleet.css'
import './Buttons'
import Buttons from './Buttons'
import backVideo from "../bgvideo/Lexus Exclusive Limousine Service.mp4"
const Fleet = () => {
  return (
<>
<section className="fleet">
<video autoPlay muted loop id="myVideo">
  <source src={backVideo} type="video/mp4"/>
</video>

    <h3>
        our fleet, your fleet
    </h3>
    <h6>
    We know the difference is in the details and that’s why our car rental services, in the tourism <br />
and business industry, stand out for their quality and good taste, to offer you an unique experience
    </h6>

    <a href="tell:(54)-344-4533-4">Call Now (54)-344-4533-4</a>
<Buttons nameOfClass='fleet-btn' valueOfButton='Request a Quote'/>
</section>

</>
  )
}

export default Fleet