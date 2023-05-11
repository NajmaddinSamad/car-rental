import React from 'react'
import './style/Normalize.css'
import './style/OurTeam.css'
import TeamMember from './TeamMember'
import { useState, useEffect } from "react";
const OurTeam = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://res.cloudinary.com/doqjpxywu/raw/upload/v1683542332/ourTeam_hepk1d")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);

  return (
    <>
    <section className="our-team row">
<h2>Meet Our Team</h2>
<h6>Car rental, limousine, and car hire. All in one service.</h6>

{data &&
        data.map((member) => {
          return <TeamMember memberPhoto={member.photo} memberName={member.fullName} memberJob={member.job}/>;
        })}

    </section>
    </>
  )
}

export default OurTeam