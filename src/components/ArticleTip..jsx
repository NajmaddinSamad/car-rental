import {React,useEffect} from 'react'
import './AboutTips'
import dataTips from '../article.json'
import AboutTips from './AboutTips'
import './style/Normalize.css'
import './style/ArticleTip.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const ArticleTip = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
<article className="article row">
    <h2 data-aos="zoom-in">Articles & Tips</h2>
    <h6 data-aos="zoom-in">Explore some of the best tips from around the world</h6>
{
    dataTips.map(data=>(
        <AboutTips tipsPhoto={data.photo} tipsHeader={data.header} tipsDate={data.date} tipsParagraph={data.paragraph} />
    ))
}

</article>

    </>
  )
}
export default ArticleTip
