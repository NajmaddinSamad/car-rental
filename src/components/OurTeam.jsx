import React, { useState, useEffect } from 'react';
import '../assets/style/Normalize.css';
import '../assets/style/OurTeam.css';
import TeamMember from './TeamMember';

const OurTeam = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://res.cloudinary.com/doqjpxywu/raw/upload/v1683542332/ourTeam_hepk1d");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="our-team row">
      <h2>Meet Our Team</h2>
      <h6>Car rental, limousine, and car hire. All in one service.</h6>

      {data &&
        data.map((member) => {
          return <TeamMember memberPhoto={member.photo} memberName={member.fullName} memberJob={member.job} key={member.id} />;
        })}
    </section>
  );
};

export default OurTeam;
