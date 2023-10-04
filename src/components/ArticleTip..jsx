import React, { useState, useEffect } from 'react';
import AboutTips from './AboutTips';
import '../assets/style/Normalize.css';
import '../assets/style/ArticleTip.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ArticleTip = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://res.cloudinary.com/doqjpxywu/raw/upload/v1683541232/article_ovvko9.json");
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <article className="article row">
        <h2 data-aos="zoom-in">Articles & Tips</h2>
        <h6 data-aos="zoom-in">Explore some of the best tips from around the world</h6>
        {data.map((item) => (
          <AboutTips
            key={item.id}
            tipsPhoto={item.photo}
            tipsHeader={item.header}
            tipsDate={item.date}
            tipsParagraph={item.paragraph}
          />
        ))}
      </article>
    </>
  );
};

export default ArticleTip;
