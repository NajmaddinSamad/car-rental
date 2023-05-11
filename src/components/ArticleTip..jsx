import {React,useEffect} from 'react'
import { useState} from "react";
import './AboutTips';
import AboutTips from './AboutTips'
import './style/Normalize.css'
import './style/ArticleTip.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const ArticleTip = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://res.cloudinary.com/doqjpxywu/raw/upload/v1683541232/article_ovvko9.json")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);

  return (
    <>
<article className="article row">
    <h2 data-aos="zoom-in">Articles & Tips</h2>
    <h6 data-aos="zoom-in">Explore some of the best tips from around the world</h6>
    {data &&
        data.map((item) => {
          return  <AboutTips tipsPhoto={item.photo} tipsHeader={item.header} tipsDate={item.date} tipsParagraph={item.paragraph} />
        })}

</article>

    </>
  )
}
export default ArticleTip
