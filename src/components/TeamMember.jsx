import React from 'react'
import './style/Normalize.css'
import './style/OurTeam.css'
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai"
const TeamMember = ({memberPhoto, memberJob, memberName}) => {
  return (
    <div className="member col-12 col-md-3 col-lg-2">
<div className="for-member-photo">
<div className="team-socials">
        <span title={`${memberName} on Twitter`}><GrTwitter/></span>
        <span title={`${memberName} on Facebook`}><FaFacebookF/></span>
        <span title={`${memberName} on Google+`}><AiOutlineGooglePlus/></span>
        <span title={`${memberName} on Linkedin`}><FaLinkedinIn/></span>
        </div>
<img src={memberPhoto} alt="" />
        </div>
        <h3>{memberName}</h3>
        <h4>{memberJob}</h4>
    </div>
  )
}

export default TeamMember