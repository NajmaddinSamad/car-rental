import {React, useEffect} from 'react'
import './style/ArticleTip.css'
import { AiOutlineRight } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AboutTips = ({tipsPhoto, tipsHeader, tipsDate, tipsParagraph}) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
   
    <>
    <div className="tips-card col-12 col-md-3 col-lg-3" data-aos="zoom-in-out">
        <img src={tipsPhoto} alt="" />
     <div className="for-text">
       <h5>{tipsDate}</h5>
        <h4>{tipsHeader}</h4>
        <p>{tipsParagraph}</p>
        <a href="#">Read More <AiOutlineRight className= "read-arrow"/></a>
        </div>
    </div>

    </>
  )
}
export default AboutTips