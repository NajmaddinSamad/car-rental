import React from 'react'
import './style/Normalize.css'
import './style/ServicesSection.css'
import Buttons from './Buttons'

const ServicesSection = () => {
  return (
    <>
    <section className="services-section">
    <div className="first row">
        <div className="first-left col-12 col-md-6 col-lg-6"><img src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/pexels-photo-2.jpg" alt="" /></div>
    <div className="first-right col-12 col-md-6 col-lg-6">
      <h2>Car Rental</h2>
      <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro.

</p>
      <Buttons nameOfClass="services-btn" valueOfButton="View Plan & Price"/>
    </div>
    </div>
    <div className="second row">
    <div className="second-left col-12 col-md-6 col-lg-6">
      <h2>Limousine</h2>
      <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro.

</p>
      <Buttons nameOfClass="services-btn" valueOfButton="View Plan & Price"/>
    </div>
    <div className="second-right col-12 col-md-6 col-lg-6"><img src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/nw6xremkxkg-nicolai-berntsen.jpg" alt="" /></div>
    </div>
    <div className="third row">
    <div className="third-left col-12 col-md-6 col-lg-6"><img src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/pexels-photo-112631.jpeg" alt="" /></div>
    <div className="third-right col-12 col-md-6 col-lg-6">
      <h2>Weddings & Parties</h2>
      <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro.

</p>
      <Buttons nameOfClass="services-btn" valueOfButton="View Plan & Price"/>
    </div>
    </div>
    </section>
    
    </>
  )
}

export default ServicesSection