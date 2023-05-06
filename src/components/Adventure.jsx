import {React, useEffect} from "react";
import "./style/Normalize.css";
import "./style/Adventure.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Adventure = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <section className="adventure">
        <h3  data-aos="flip-up">
          This adventure isn’t about <br /> change but it seems to be an <br />
          inevitability.
        </h3>
        <p  data-aos="flip-up">
          Meh synth Schlitz, tempor duis single-origin coffee ea next level
          ethnic <br /> fingerstache fanny pack nostrud.Photo booth anim 8-bit
          hella, PBR 3 wolf <br /> moon beard Helvetica. Salvia esse nihil,
          flexitarian Truffaut synth art party <br /> deep v chillwave. Seitan
          High Life reprehenderit consectetur cupidatat kogi. Et <br /> leggings
          fanny pack, elit bespoke vinyl art party Pitchfork selfies master
          <br /> cleanse.
        </p>
        <div className="count row"  data-aos="flip-up">
          <div className="count-left col-12 col-md-6 col-lg-6" >
            <span >1,109</span>
            <h6>Trips</h6>
          </div>
          <div className="count-right col-12 col-md-6 col-lg-6">
            <span>7,010</span>
            <h6>Happy Customers</h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default Adventure;
