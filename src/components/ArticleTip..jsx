import React from 'react'
import './AboutTips'
import dataTips from '../article.json'
import AboutTips from './AboutTips'
import './style/Normalize.css'
import './style/ArticleTip.css'
export const ArticleTip = () => {
  return (
    <>
<article className="article row">
    <h2>Articles & Tips</h2>
    <h6>Explore some of the best tips from around the world</h6>
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
