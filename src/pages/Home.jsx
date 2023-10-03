import React from 'react'
import Header from '../components/Header';
import CarRental from '../components/CarRental';
import CarTypes from '../components/CarTypes';
import Fleet from '../components/Fleet';
import ChooseUs from '../components/ChooseUs';
import { ArticleTip } from '../components/ArticleTip.';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
  <>
  <Helmet>
    <title>
      Home page
    </title>
  </Helmet>

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