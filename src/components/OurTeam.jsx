import React from 'react'
import './style/Normalize.css'
import './style/OurTeam.css'
import TeamMember from './TeamMember'
import aboutMember from '../ourTeam.json'

const OurTeam = () => {
  return (
    <>
    <section className="our-team row">
<h2>Meet Our Team</h2>
<h6>Car rental, limousine, and car hire. All in one service.</h6>

{
    aboutMember.map(member=>(
<TeamMember memberPhoto={member.photo} memberName={member.fullName} memberJob={member.job}/>
    ))

}
    </section>
    </>
  )
}

export default OurTeam