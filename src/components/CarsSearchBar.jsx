import React from 'react';
import Buttons from './Buttons';

const CarsSearchBar = () => {
  return (
   <>
    <form className="cars-header-search-box row">
   
   <select name="" id="" className=" col-12 col-md-2 col-lg-2 select">
      <option value="Any brand">Any brand</option>
      <option value="Audi">Audi</option>
      <option value="Bmw">Bmw</option>
      <option value="Lexus">Lexus</option>
      <option value="Mercedes">Mercedes</option>
      <option value="Hundai">Hundai</option>
    </select>
    <select name="" id="" className=" col-12 col-md-2 col-lg-2 select">
      <option value="Any type">Any type</option>
      <option value="Sedan">Sedan</option>
      <option value="Couple">Couple</option>
      <option value="Suv">Suv</option>
    </select>
    <select name="" id="" className=" col-12 col-md-2 col-lg-2  select">
      <option value="price">Price</option>
      <option value="price Low to High">price Low to High</option>
      <option value="High to Low">High to Low</option>
      <option value="Sort by Review Score">Sort by Review Score</option>
    </select>
    <Buttons nameOfClass='col-12 col-md-2 col-lg-2 search-btn' valueOfButton='search'/>
   </form>
   </>
  )
}

export default CarsSearchBar