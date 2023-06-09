import {React, useEffect} from 'react';
import '../assets/style/Normalize.css'
import '../assets/style/CarsSearchBar.css'
import Button from './Buttons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarsSearchBar = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
   <>
   <section className="for-cars-search-box" data-aos="flip-up">
   <form className=" row cars-header-search-box">
   
   <select name="" id="" className=" col-12 col-md-3 col-lg-3 for-select">
      <option value="Any brand">Any brand</option>
      <option value="Audi">Audi</option>
      <option value="Bmw">Bmw</option>
      <option value="Lexus">Lexus</option>
      <option value="Mercedes">Mercedes</option>
      <option value="Hundai">Hundai</option>
    </select>
    <select name="" id="" className=" col-12 col-md-3 col-lg-3 for-select">
      <option value="Any type">Any type</option>
      <option value="Sedan">Sedan</option>
      <option value="Couple">Couple</option>
      <option value="Suv">Suv</option>
    </select>
    <select name="" id="" className=" col-12 col-md-3 col-lg-3  for-select">
      <option value="price">Price</option>
      <option value="price Low to High">price Low to High</option>
      <option value="High to Low">High to Low</option>
      <option value="Sort by Review Score">Sort by Review Score</option>
    </select>
    <Button nameOfClass='col-12 col-md-3 col-lg-3 searching-btn' valueOfButton='search'/>
   </form>
   </section>
   </>
  )
}

export default CarsSearchBar