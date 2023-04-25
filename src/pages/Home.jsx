import React from 'react'
import Header from '../components/Header';
import CarRental from '../components/CarRental';
import CarTypes from '../components/CarTypes';
import Fleet from '../components/Fleet';
import ChooseUs from '../components/ChooseUs';
import { ArticleTip } from '../components/ArticleTip.';
const Home = () => {
  return (
  <>

    <Header/>
    <CarRental/>
    <CarTypes/>
    <Fleet/>
    <ChooseUs/>
    <ArticleTip/>

  </>
  )
}

export default Home